// import databaseContext from "../database/db";
import fs from 'fs'
import path from 'path';
const projectsDirectoryDataPath = "../data/projects.json";
const projectsDirectoryDocumentPath = `${process.cwd()}/documents/projects/`
class ProjectController {
  async createProject(req, res) {
    try {
      const { title, description } = req.body;
      const id = parseInt(Date.now().toString());
      
      // Get the path of the uploaded file and construct the destination path using the custom directory
      const filePath = req.file.path;
      const destinationPath = `${projectsDirectoryDocumentPath}/${req.file.originalname.replace(/ /g,"_")}`;
      const image = `${process.env.BACKEND_URL}/projects/documents/${req.file.originalname.replace(/ /g,"_")}`;
      // Move the file to the custom directory
      const newArt = { id, title, description, image };
      fs.renameSync(filePath, destinationPath);

      const data = JSON.parse(fs.readFileSync(projectsDirectoryDataPath));
      data.push(newArt);
      fs.writeFileSync(projectsDirectoryDataPath, JSON.stringify(data));
      res.json(newArt);
    } catch (e) {
      console.log(e);
    }
  }
  async getProjects(req, res) {
    try {
      const data = JSON.parse(fs.readFileSync(projectsDirectoryDataPath));
      res.json(data);
    } catch (e) {
      console.log(e);
    }
  }
  async getProject(req, res) {
    try {
      const id = parseInt(req.params.id)
      const data = JSON.parse(fs.readFileSync(projectsDirectoryDataPath));
      const art = data.find((a) => a.id === id);
      if (art) {
        res.status(200).json(art);
      } else {
        res.status(404).json({ message: "Art project not found" });
      }
    } catch (e) {
      console.log(e);
    }
  }
  async updateProject(req, res) {
    try {
      const data = JSON.parse(fs.readFileSync(projectsDirectoryDataPath));
      const art = data.find((a) => a.id === req.params.id);

      if (art) {
        const { title, description } = req.body;
        const image = req.file ? req.file.filename : art.image;

        art.title = title;
        art.description = description;
        art.image = image;

        fs.writeFileSync(projectsDirectoryDataPath, JSON.stringify(data));
        res.json(art);
      } else {
        res.status(404).json({ message: "Art project not found" });
      }
    } catch (e) {
      console.log(e);
    }
  }
  async deleteProject(req, res) {
    try {
      const data = JSON.parse(fs.readFileSync(projectsDirectoryDataPath));
      const index = data.findIndex((a) => a.id === req.params.id);

      if (index !== -1) {
        const deleted = data.splice(index, 1)[0];
        fs.writeFileSync(projectsDirectoryDataPath, JSON.stringify(data));
        res.json(deleted);
      } else {
        res.status(404).json({ message: "Art project not found" });
      }
    } catch (e) {
      console.log(e);
    }
  }
}

export default new ProjectController();

// app.get('/api/art', (req, res) => {
//     const data = JSON.parse(fs.readFileSync('art.json'));
//     res.json(data);
//   });

//   // Create new art project
//   app.post('/api/art', upload.single('image'), (req, res) => {
//     const { title, description } = req.body;
//     const image = req.file.filename;
//     const id = Date.now().toString();
//     const newArt = { id, title, description, image };

//     const data = JSON.parse(fs.readFileSync('art.json'));
//     data.push(newArt);
//     fs.writeFileSync('art.json', JSON.stringify(data));

//     res.json(newArt);
//   });

//   // Get single art project
//   app.get('/api/art/:id', (req, res) => {
//     const data = JSON.parse(fs.readFileSync('art.json'));
//     const art = data.find((a) => a.id === req.params.id);

//     if (art) {
//       res.json(art);
//     } else {
//       res.status(404).json({ message: 'Art project not found' });
//     }
//   });

//   // Update art project
//   app.put('/api/art/:id', upload.single('image'), (req, res) => {
//     const data = JSON.parse(fs.readFileSync('art.json'));
//     const art = data.find((a) => a.id === req.params.id);

//     if (art) {
//       const { title, description } = req.body;
//       const image = req.file ? req.file.filename : art.image;

//       art.title = title;
//       art.description = description;
//       art.image = image;

//       fs.writeFileSync('art.json', JSON.stringify(data));
//       res.json(art);
//     } else {
//       res.status(404).json({ message: 'Art project not found' });
//     }
//   });

//   // Delete art project
//   app.delete('/api/art/:id', (req, res) => {
//     const data = JSON.parse(fs.readFileSync('art.json'));
//     const index = data.findIndex((a) => a.id === req.params.id);

//     if (index !== -1) {
//       const deleted = data.splice(index, 1)[0];
//       fs.writeFileSync('art.json', JSON.stringify(data));
//       res.json(deleted);
//     } else {
//       res.status(404).json({ message: 'Art project not found' });
//     }
//   });
