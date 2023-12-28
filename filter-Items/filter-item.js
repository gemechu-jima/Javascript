const menu=[
  
    {
        id:1,
        img:"image-filter/nutsandseeds.jpg",
        category:'breakfast',
        title:"Nuts and Seeds",
        price:12.8,
        description:'Swap the low-fiber, crunchy kid snacks (you know \
            the ones that are practically air) for nuts and seeds to \
         a healthful trio of fiber, protein and healthy fats. ',
    },
    {
        id:2,
        img:"image-filter/wholegrains.jpg",
        category:'breakfast',
        title:"Whole Grains",
        price:13.8,
        description:'Whole grains deliver a nutrient lacking in most kids \
        diets: fiber.Fiber keeps them full and regular,\
        in addition to other health benefits.',
    },
    {
        id:3,
        img:"image-filter/veteable.jpg",
        category:'lunch',
        title:"Vegetables, Any Kind!",
        price:12,
        description:'Kids and adults alike don\'t eat enough veggies.\
         If you can get your child to eat any vegetable—kudos!\
         And the more color and the greater the variety of vegetables, the better',
    },
    {
        id:4,
        img:"image-filter/sweettomato.jpg",
        category:'lunch',
        title:"Sweet Potato",
        price:15,
        description:'Short on time and need something nutritious?\
        Wash a sweet potato, poke some holes in it and microwave\
         it for 3-5 minutes (depending on its size).Slice it lengthwise, \
         let it cool, then scoop it onto your child\'s plate.',
    },
    {
        id:5,
        img:"image-filter/avocado.jpg",
        category:'dinner',
        title:"Avocado",
        price:14,
        description:'Avocados are full of healthy\
         benefits and are an easy way to get healthy fats into your child\'s diet.',
    },
    
    {
        id:6,
        img:"image-filter/yogurt.jpg",
        category:'dinner',
        title:"Yogurt",
        price:11,
        description:"Yogurt is a wonderful option for breakfast,\
        a snack, or even a dessert but you have to watch the added sugar content,",
    },
    {
        id:7,
        img:"image-filter/download.jpg",
        category:'shaker',
        title:"Milk",
        price:11,
        description:"Yogurt is a wonderful option for breakfast,\
        a snack, or even a dessert but you have to watch the added sugar content,",
    },
    {
        id:8,
        img:"image-filter/beans.jpg",
        category:'Takeaway',
        title:"Beans",
        price:18,
        description:"Beans are a very nutritious food. They're loaded with protein\
         and fiber, plus they're cheap and take little time to prepare. Buy low-sodium\
          canned beans such as black beans, chickpeas or kidney beans. Simply open the\
           can, rinse them to remove extra sodium and add to any dish.",
    },
    {
        id:9,
        img:"image-filter/eggs.jpg",
        category:'breakfast',
        title:"Eggs",
        price:16,
        description:"One large egg has 6 grams of protein and delivers vitamin\
         D, vitamin B12 and iron, per the USDA. Some eggs are also fortified with \
         omega-3 fatty acids, which aid in kids' brain development. Don't worry \
          the cholesterol—saturated and trans fats have a bigger impact on raising\
           bad cholesterol than eggs.",
    },
];
// select element  from document
const sectionCenter=document.querySelector('.section-center');
const buttonContainer=document.querySelector('.container-button');

// loaded document to window
window.addEventListener('DOMContentLoaded',function(){
displayMenu(menu);
displayAllBtn();
});

function displayMenu(menuItem){
    const display=menuItem.map(function(item){
        return `<article class="menu-item">
        <img src=${item.img} alt=${item.title} class="image">
       <div class="de-title-price">
        <div class="title-price">
            <h2 class="title-item"> ${item.title}</h2>
            <p class="price">$${item.price}</p>
        </div>
        <div class="description-item">
           ${item.description}        
        </div>
       </div>
       </article>`;
       });
       const displayItems=display.join("");
       sectionCenter.innerHTML=displayItems
}
 function displayAllBtn(){
    const categories=menu.reduce(function(values,items){
        if(!values.includes(items.category)){
            values.push(items.category);
        }
        return values
    
    }, ['All_Category']);
    const categoryBtn=categories.map(function(btnCategory){
    return`<button type="button" class="btn-filter" 
    data-id=${btnCategory}>${btnCategory}</button>`
    }).join("")
    buttonContainer.innerHTML=categoryBtn;
    console.log(categoryBtn);
    const filterBtn=document.querySelectorAll(".btn-filter");
    filterBtn.forEach(function(btn){
    btn.addEventListener('click',function(ev){
        const category=ev.currentTarget.dataset.id;
        const categoryDisplay=menu.filter(function(menuItem){
            if(menuItem.category===category){
                return menuItem;
            }
        })
        if(category==='All_Category'){
            displayMenu(menu);
        }else{
            displayMenu(categoryDisplay);
            console.log(categoryDisplay);
        }
    });
    })
 }