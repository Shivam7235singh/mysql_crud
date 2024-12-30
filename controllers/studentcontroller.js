const db = require("../config/db");

const getStudent = async (req, res) => {
    try {
        const data = await db.query('SELECT * FROM student');
        if (data.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No data found",
            });
        }

        res.status(200).json({
            success: true,
            message: "All data retrieved successfully",
            totalStudent : data[0].length,
            data  : data[0],
        })
    } catch (error) {
        console.error("Error in GET all student API:", error);
        res.status(500).json({
            success: false,
            message: "Error in GET all student API",
            error: error.message,
        });
    }
};

const getStudentByid = async(req , res) =>{

 
    try {
        const studentId = req.params.id;

        if(!studentId){
            res.status(505).send({
                success : false ,
                message : 'invalid or provide invalide id'
            })
        }
        //   cosnt data = await db.query(`SELECT FROM *student WHERE id = `+studentId);
          const data = await db.query(`SELECT *FROM student WHERE id = ?`,[studentId]);
          if(!data){
            res.status(505).send({
                success : false ,
                 message : " data is not found"
            })
          }

        res.status(200).send({
            success : true ,
            studentDetails : data[0]
        })
        
    } catch (error) {
        console.log(error);
        res.status(505).send({
            success : false ,
            message : 'error in get student by id  api '
        })
    }

}

module.exports = { getStudent , getStudentByid };
