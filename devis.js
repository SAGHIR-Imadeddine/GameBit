const bascketItems = [
    {item : "playstation",
    quantity: 1,
    unitPrice: 799},    
    {
    item : "mouse",
    quantity: 5,
    unitPrice: 10
    },
    {
        item : "Call Of Duty Pac",
        quantity : 1,
        unitPrice : 270
    },
    {
        item : "Xbox one",
        quantity : 1,
        unitPrice : 800
    },
    {
        item : "dell vostro",
        quantity : 1,
        unitPrice : 650
    },
    {
        item : "dell ",
        quantity : 1,
        unitPrice : 650
    }


];
const tbody = document.getElementById('tbody');





window.addEventListener('load', ()=>{
    bascketItems.forEach((basketItem)=>{
        let tn = basketItem.quantity*basketItem.unitPrice;
        let vat = tn * 0.2 ;
        let tg = tn + vat;
        const tablRow = document.createElement('tr');
        tablRow.setAttribute('style', 'border-bottom: 1px solid #000;');
        tablRow.innerHTML = `
        <td >${basketItem.item}</td>
        <td class="text-right">${basketItem.quantity}</td>
        <td class="text-right">${basketItem.unitPrice}&dollar;</td>
        <td class="text-right">${tn}&dollar;</td>
        <td class="text-right">${vat}&dollar;</td>
        <td class="text-right">${tg}&dollar;</td>`;
        tbody.appendChild(tablRow);
    })

    let totalHT = document.getElementById('Tht');
    let vatAmount = document.getElementById('VatA');
    let totalGross = document.getElementById('TG');
    let bigTotal = document.getElementById('bigTotal');
    let itemsNumber = document.getElementById('itemsNumber');
    
  const totalUnitPrice = bascketItems.reduce((total, item)=> total + (item.unitPrice * item.quantity), 0);
  const totalVAT = bascketItems.reduce((total, item)=> total + (item.unitPrice * item.quantity)* 0.2, 0);
  const totalG = bascketItems.reduce((total, item)=> total + ((item.unitPrice * item.quantity)* 0.2) + (item.unitPrice * item.quantity), 0);
 
  totalHT.innerText = totalUnitPrice + '$';
  vatAmount.innerText = totalVAT + '$';
  totalGross.innerText = totalG + '$';
  bigTotal.innerText = totalG + '$';
  itemsNumber.innerText = bascketItems.length +' Items';




    
  const d = new Date();
  const time = document.querySelector('.dateI');
  const time2 = document.getElementById('printTime')   
  
      const yy = d.getFullYear();
      const mm = d.getMonth() + 1;
      const dd = d.getDate();    
        time.innerText = yy + '/' + mm + '/' + dd;
        time2.innerText = yy + '/' + mm + '/' + dd;
      


    
   
})








function saveData(key, value){
localStorage.setItem("basket", JSON.stringify(bascketItems))
};

saveData();


    const bttn1 = document.getElementById('bttn1');
    const bttn2 =  document.getElementById('bttn2');
    const invoice = document.getElementById('invoice');
    const printIntro = document.getElementById('print-intro');
    const tableIntro = document.getElementById('table-intro');
    const backHome = document.getElementById('backHome');
    
    bttn1.addEventListener('click', ()=>{
        
        bttn1.style.display="none";
        bttn2.style.display="none";
        tableIntro.classList.add("hidden");
        backHome.classList.add("hidden");
        printIntro.classList.remove("hidden");
        invoice.style.color="#000"

       
        window.print();

        bttn1.style.display="block";
        bttn2.style.display="block";
        tableIntro.classList.remove("hidden");
        printIntro.classList.add("hidden");
        backHome.classList.remove("hidden");
        invoice.style.color="transparent"
       
    });


   