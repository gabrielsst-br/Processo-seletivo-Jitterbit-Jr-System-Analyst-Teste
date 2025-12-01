const Order=require("../models/orderModel");
function transformData(p){
  return {
    orderId:p.numeroPedido,
    value:p.valorTotal,
    creationDate:p.dataCriacao,
    items:p.items.map(i=>({
      productId:Number(i.idItem),
      quantity:i.quantidadeItem,
      price:i.valorItem
    }))
  };
}
module.exports={
  async create(req,res){ try{
    const d=transformData(req.body);
    await Order.createOrder(d,d.items);
    res.status(201).json({message:"Pedido criado"});
  }catch(e){res.status(500).json({error:e.message});}},
  async getOne(req,res){ try{
    const r=await Order.getOrder(req.params.id);
    if(!r.order) return res.status(404).json({error:"Não encontrado"});
    res.json(r);
  }catch(e){res.status(500).json({error:e.message});}},
  async list(req,res){ try{ res.json(await Order.getAllOrders()); }
  catch(e){res.status(500).json({error:e.message});}},
  async update(req,res){ try{
    const d=transformData(req.body);
    await Order.updateOrder(req.params.id,d,d.items);
    res.json({message:"Atualizado"});
  }catch(e){res.status(500).json({error:e.message});}},
  async remove(req,res){ try{
    await Order.deleteOrder(req.params.id);
    res.json({message:"Deletado"});
  }catch(e){res.status(500).json({error:e.message});}}
};