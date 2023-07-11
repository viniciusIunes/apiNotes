const fs = require("fs")
const patch = require("path")
const uploadConfig = require("../configs/upload")

class DiskStorage {
  async saveFile(file){
    await fs.promises.rename(
      patch.resolve(uploadConfig.TMP_FOLDER, file),
      patch.resolve(uploadConfig.UPLOADS_FOLDER, file) // muda o arquivo de lugar
    )
    return file
  }

  async deleteFile(file) {
    const filePath = patch.resolve(uploadConfig.UPLOADS_FOLDER, file)

    try {
      await fs.promises.stat(filePath)
    } catch {
      return
    }

    await fs.promises.unlink(filePath)
  }
}
 
module.exports = DiskStorage