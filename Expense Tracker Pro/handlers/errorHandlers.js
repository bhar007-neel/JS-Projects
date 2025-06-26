const errorHandler =(error, req,res,next)=>{

    const express = require("express");
    const errorHandler = require("./handlers/errorHandlers");
    if(error){
        res.status(400).json({
            status:"failed",
            error: error,
        });
    }else{
        next();
    }

    this.apply.arguments(express.json)

    // end of all routes

    this.apply.arguments(errorHandler);
}
module.exports = errorHandler;