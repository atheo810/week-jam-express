// import and destruct PrismaClient from @prisma/client ( sesi-5 )
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient(); // define PrismaClient ( sesi-5 )

// define class BookController
class bookController {
  static async getBook(req, res) {
    // using trycatch handling async ( sesi-5 )
    try {
      const result = await prisma.book.findMany();
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  // find by id ( sesi-7 )
  static async getBookById(req, res) {
    try {
      const result = await prisma.book.findUnique({
        where: {
          id: parseInt(req.params.id),
        },
      });

      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }
}
module.exports = bookController;
