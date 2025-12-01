const db=require("../config/db");
module.exports={
  async createOrder(order,items){
    const {orderId,value,creationDate}=order;
    await db.query("INSERT INTO Orders (orderId,value,creationDate) VALUES ($1,$2,$3)",[orderId,value,creationDate]);
    for(const it of items){
      await db.query("INSERT INTO Items (orderId,productId,quantity,price) VALUES ($1,$2,$3,$4)",[orderId,it.productId,it.quantity,it.price]);
    }
  },
  async getOrder(id){
    const o=await db.query("SELECT * FROM Orders WHERE orderId=$1",[id]);
    const i=await db.query("SELECT * FROM Items WHERE orderId=$1",[id]);
    return {order:o.rows[0],items:i.rows};
  },
  async getAllOrders(){ return (await db.query("SELECT * FROM Orders")).rows; },
  async updateOrder(id,order,items){
    await db.query("UPDATE Orders SET value=$1,creationDate=$2 WHERE orderId=$3",[order.value,order.creationDate,id]);
    await db.query("DELETE FROM Items WHERE orderId=$1",[id]);
    for(const it of items){
      await db.query("INSERT INTO Items (orderId,productId,quantity,price) VALUES ($1,$2,$3,$4)",[id,it.productId,it.quantity,it.price]);
    }
  },
  async deleteOrder(id){
    await db.query("DELETE FROM Items WHERE orderId=$1",[id]);
    await db.query("DELETE FROM Orders WHERE orderId=$1",[id]);
  }
};