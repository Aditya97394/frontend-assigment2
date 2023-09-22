<template>
 
 <div class="home-page text-page">
       <h1> {{name }} </h1>
        <p>{{ address  }} </p>      
    </div>
    <hr>
    <form >
      <h3 style="text-align: center" class="text-centre text-info">{{title}}</h3>
      
      <div class="row">
         <div class="row-md-3">
          <div class="form-group">
           <label for="invoicenumber" class="text-bold">Invoice Number</label> 
           <input  type="text" id="invoicenumber" class="form-group" v-model="invoice.invoiceNo" >
            <label for="invoicedate" class="text-bold">Invoice Date</label>  
           <input type="text" id="invoicedate" class="form-group" v-model="invoice.invoicedate" >
           <label for="customerid" class="text-bold">Customer</label> 
           <select > 
           <input type="text" id="customerid" class="form-group" v-model="invoice.customerid" > 
            <option value="0" selected>-select-</option>
            <option v-for="c in customerid" :value="c.id" :key="c.id">{{c.customName}}</option>
            </select>
           <label for="invoicepodate" class="text-bold">PO Date</label> 
           <input type="text" id="invoicepodate" class="form-group" v-model="invoice.invoicepodate" >
          </div>
         </div>
      </div>
     
    </form>
    <hr>
</template>

<script>


export default {
   name : 'CreateInvoice',
    data () {
            return {
                name: 'TECHNETIC',
                address : 'www.technetic.com',
                title : 'Sales Invoice',
               invoice:
               {
               invoiceNo : 'inv-001',
               invoicedate : '22-09-2023',
               invoicepodate : '13-09-2023',

               },
               customerid :[
                  {id:1,customName : 'customer 1'},
                  {id:1,customName : 'customer 2'},
                  {id:1,customName : 'customer 3'},
                  {id:1,customName : 'customer 4'},
                  {id:1,customName : 'customer 5'},
                  {id:1,customName : 'customer 6'},
               ],
            } 
        }
}
</script>

<style >
.home-page{
  background: #0C3D20;
  text-align: center;
  width: 100%;
  height: 50%;
  font-size: 150%;
  padding: 9px;
  margin:0px;
  color: white;
}
.text-page{
   font-size: 15px;
  }
  hr{
   border-top: 1px solid #0C3D20;
  }
.text-bold{
   font-weight: 500;
}

.form-group{
 font-size: 20px;

}


</style>
