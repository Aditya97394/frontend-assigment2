<template>
 
  
 <router-link  class="nav-item nav-link active  pe-5" to="/History/Edit " style="" ></router-link>
 <router-view > </router-view> 
 <div class="page-lay">
<h1>{{title}}</h1>
 </div>
 
 <table class="table table-bordered table-striped table-hover">
  <thead>
   <tr class="text-center">
      <th>Product</th>
      <th>Unit price</th>
      <th>Quantity</th>
      <th>Discount &percnt; </th>
      <th>Sub-Total</th>
      <th>Tax &percnt;</th>
      <th>Tax-Value</th>
      <th>Total</th>
      <th>
         <button type="button" class="btn btn-success btn-sm">
            <span aria-hidden="true"> &plus;</span>
         </button>
      </th>

   </tr>
  </thead>
     
 </table>

</template>

<script>


export default {
   name : 'History',
   data()
   {
      return{
         title : 'Invoice History ',
        invoicedetails : [
            {
               id : 0,
               parentInvoiceid : 0,
               productid : 0,
               unitprice :0,
               Qty : 0,
               discountRate : 0,
               subTotal : 0,
               Tax : 0,
               taxValue : 0,
               total : 0,
               margin :0,
                
            },
            ]

           
         
        
      }
   }
}
</script>

<style >
.page-lay{
   
  
  text-align: center;
  width: 100%;
  height: 30%;
  font-size: 10%;
  padding: 4px;
  margin:0px;
  color: #00bfff;
}
</style>
