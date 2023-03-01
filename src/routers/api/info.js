import { Router } from "express";
import os from "os";

// Crea un nuevo objeto Router
const router = Router();

// Define la ruta para la solicitud GET a '/'
router.get("/", (req, res, next) => {
  try {
    // Crea un objeto con información del sistema
    const systemInfo = {
      cpuCount: os.cpus().length,
      commandLineArgs: process.argv.slice(2),
      operatingSystem: process.platform,
      nodeVersion: process.version,
      memoryUsage: process.memoryUsage().rss,
      executablePath: process.execPath,
      processId: process.pid,
      currentWorkingDirectory: process.cwd(),
    };

    // Envía una respuesta con el objeto creado
    return res.status(200).json(systemInfo);
  } catch (error) {
    // Lanza el error a la siguiente capa
    next(error);
  }
});

// Exporta el objeto Router
export default router;
