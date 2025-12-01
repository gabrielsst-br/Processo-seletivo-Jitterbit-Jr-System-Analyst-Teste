const express=require("express");
const cors=require("cors");
const authRoutes=require("./routes/authRoutes");
const orderRoutes=require("./routes/orderRoutes");
const swaggerUi=require("swagger-ui-express");
const swaggerJsdoc=require("swagger-jsdoc");

const app=express();
app.use(cors());
app.use(express.json());

const swaggerOptions={
  definition:{
    openapi:"3.0.0",
    info:{title:"Jitterbit Orders API",version:"1.0.0"},
    components:{
      securitySchemes:{ bearerAuth:{type:"http",scheme:"bearer",bearerFormat:"JWT"} }
    }
  },
  apis:["./src/routes/*.js"]
};
const swaggerSpec=swaggerJsdoc(swaggerOptions);
app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerSpec));

app.use("/",authRoutes);
app.use("/",orderRoutes);

app.listen(3000,()=>console.log("Rodando em http://localhost:3000"));
