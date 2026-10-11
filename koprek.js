(()=>{
 const header=document.querySelector('.site-header');
 const toggle=document.querySelector('.menu-toggle');
 const drawer=document.querySelector('.menu-drawer');
 const backdrop=document.querySelector('.drawer-backdrop');
 if(header&&toggle&&drawer&&backdrop){
  function setMenuOpen(isOpen){
   toggle.setAttribute('aria-expanded',String(isOpen));
   toggle.setAttribute('aria-label',isOpen?(currentLanguage==='en'?'Close navigation menu':'Tutup menu navigasi'):(currentLanguage==='en'?'Open navigation menu':'Buka menu navigasi'));
   drawer.hidden=!isOpen;
   backdrop.hidden=!isOpen;
   document.body.classList.toggle('menu-open',isOpen);
   if(isOpen)drawer.querySelector('a')?.focus();
   else toggle.focus();
  }
  toggle.addEventListener('click',()=>setMenuOpen(toggle.getAttribute('aria-expanded')!=='true'));
  backdrop.addEventListener('click',()=>setMenuOpen(false));
  drawer.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',()=>setMenuOpen(false)));
  document.addEventListener('keydown',event=>{
   if(event.key==='Escape'&&toggle.getAttribute('aria-expanded')==='true')setMenuOpen(false);
  });
 }

 const translations={
  en:{
   pageTitle:'Koprek Indonesia — Bold Flavours, Good Times',
   metaDescription:'Koprek serves bold Indonesian flavours, crispy kremes, and good times to share.',
   chooseLanguage:'Choose language',
   languageIndonesian:'Indonesian',
   languageEnglish:'English',
   brandHome:'Koprek home',
   openNavigation:'Open navigation menu',
   closeNavigation:'Close navigation menu',
   mainNavigation:'Main navigation',
   navHome:'Home',
   navMenu:'Explore the menu',
   navStory:'Our story',
   navContact:'Contact us',
   heroGallery:'Koprek food gallery',
   heroCommunityAlt:'A collage of the Koprek team together',
   heroPackageAlt:'Koprek meal and drink packages',
   heroCollaborationAlt:'Collaborating with Koprek',
   signatureChickenAlt:'Nasi kremes with ayam geprek',
   signatureEggAlt:'Nasi kremes with egg',
   signatureTofuAlt:'Nasi kremes with tofu meatballs',
   indomieChickenAlt:'Indomie kremes with ayam geprek',
   indomieEggAlt:'Indomie kremes with egg',
   americanoAlt:'Americano',
   icedTeaAlt:'Iced tea',
   latteAlt:'Iced latte',
   lemonTeaAlt:'Lemon tea',
   baileysAlt:'Baileys latte',
   lycheeTeaAlt:'Lychee tea',
   butterscotchAlt:'Butterscotch latte',
   oreoAlt:'Oreo shake',
   mineralWaterAlt:'Bottled water',
   chocolateAlt:'Iced chocolate',
   friedTofuAlt:'Fried tofu meatballs',
   friesAlt:'French fries',
   friedSiomayAlt:'Fried siomay',
   chooseGallery:'Choose a photo gallery',
   showSignaturePhoto:'Show signature dish photo',
   showIndomiePhoto:'Show Indomie dish photo',
   showDrinkPhoto:'Show drink photo',
   previousPhoto:'Previous photo',
   nextPhoto:'Next photo',
   exploreKoprek:'Explore Koprek',
   quickMenuCaption:'Freshly made, best shared',
   quickMenuLink:'Explore our menu',
   quickContactCaption:'Ordering in bulk?',
   quickContactLink:'Chat with us for a custom menu!',
   menuEyebrow:'Customer favourites',
   menuHeading:'What are you <span>craving?</span>',
   chooseMenuCategory:'Choose a menu category',
   tabSignature:'Best Seller',
   tabNoodles:'Noodles',
   tabBeverages:'Beverages',
   tabSnacks:'Snacks',
   menuDishes:'Menu dishes',
   previousDish:'Show previous dish',
   shuffleDish:'Move the top dish to the back',
   signatureBadge:'A crowd favourite',
   signatureChickenCopy:'Crispy chicken, fragrant spices, crunchy kremes, and shallot sambal.',
   signatureEggBadge:'A comforting favourite',
   signatureEggCopy:'Egg, warm rice, crunchy kremes, and shallot sambal.',
   signatureTofuBadge:'Something different',
   signatureTofuCopy:'Tofu meatballs, fragrant spices, crunchy kremes, and shallot sambal.',
   indomieChickenBadge:'Big portion, bold flavour',
   indomieChickenCopy:'Indomie noodles, crispy chicken, crunchy kremes, and shallot sambal.',
   indomieEggBadge:'A noodle lover’s favourite',
   indomieEggCopy:'Indomie noodles, crunchy kremes, egg, and shallot sambal.',
   coffee:'Coffee',
   nonCoffee:'Non-coffee',
   americanoCopy:'Refreshing Arabica espresso with a bold flavour.',
   icedTeaCopy:'Refreshing sweet iced tea, perfect with spicy food.',
   icedTeaName:'Iced Tea',
   latteCopy:'Arabica espresso blended with smooth fresh milk.',
   latteName:'Iced Latte',
   lemonTeaCopy:'Refreshing lemon tea to pair with spicy dishes.',
   lemonTeaName:'Lemon Tea',
   baileysCopy:'Smooth latte with Baileys syrup.',
   lycheeTeaCopy:'Refreshing iced tea with a hint of lychee.',
   lycheeTeaName:'Lychee Tea',
   butterscotchCopy:'Milk blended with rich butterscotch syrup.',
   oreoCopy:'Creamy Oreo milk topped with crunchy cookie pieces.',
   refreshment:'Refreshment',
   mineralWaterCopy:'Bottled water to go with your meal.',
   mineralWaterName:'Bottled Water',
   chocolateCopy:'Smooth, delicious premium chocolate.',
   chocolateName:'Iced Chocolate',
   crispySavory:'Crispy and savoury',
   friedTofuCopy:'Fried tofu meatballs, perfect for a snack.',
   snackTime:'Snack time',
   friesName:'French Fries',
   friesCopy:'Crispy fries, perfect for sharing.',
   savorySnack:'A savoury bite',
   friedSiomayName:'Fried Siomay',
   friedSiomayCopy:'Crispy fried siomay with a savoury flavour.',
   fullMenu:'View the full menu',
   aboutImageAlt:'Koprek bulk order package',
   aboutEyebrow:'Bulk orders & collaborations',
   aboutHeading:'Planning an event or a collaboration?<br/><span>Let’s chat!</span>',
   aboutCopy:'Need a large order for an event or interested in collaborating? The Koprek team is ready to help.',
   aboutLink:'Chat with us!',
   contactEyebrow:'Good times are better together',
   contactHeading:'See you at the table!',
   contactLink:'Find us',
   footerTagline:'Bold flavours. Good times. Made to share.',
   instagramLink:'Instagram @koprek.id',
   whatsappLink:'WhatsApp Admin',
   whatsappAdmin:'Admin',
   footerAddress:'Jl. Nginden Semolo No.101 kav.23, Menur Pumpungan, Kec. Sukolilo, Surabaya, Jawa Timur 60118'
  }
 };
 let currentLanguage='id';
 const originalText=new Map([...document.querySelectorAll('[data-i18n]')].map(element=>[element,element.innerHTML]));
 const originalHtml=new Map([...document.querySelectorAll('[data-i18n-html]')].map(element=>[element,element.innerHTML]));
 const originalAlt=new Map([...document.querySelectorAll('[data-i18n-alt]')].map(element=>[element,element.alt]));
 const originalAria=new Map([...document.querySelectorAll('[data-i18n-aria]')].map(element=>[element,element.getAttribute('aria-label')]));
 const originalTitle=document.title;
 const descriptionMeta=document.querySelector('meta[name="description"]');
 const originalDescription=descriptionMeta.content;
 function applyLanguage(language){
  currentLanguage=language;
  const english=language==='en';
  document.documentElement.lang=language;
  document.title=english?translations.en.pageTitle:originalTitle;
  descriptionMeta.content=english?translations.en.metaDescription:originalDescription;
  document.querySelectorAll('[data-i18n]').forEach(element=>{
   element.textContent=english?translations.en[element.dataset.i18n]:originalText.get(element);
  });
  document.querySelectorAll('[data-i18n-html]').forEach(element=>{
   element.innerHTML=english?translations.en[element.dataset.i18nHtml]:originalHtml.get(element);
  });
  document.querySelectorAll('[data-i18n-alt]').forEach(element=>{
   element.alt=english?translations.en[element.dataset.i18nAlt]:originalAlt.get(element);
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(element=>{
   const key=element.dataset.i18nAria;
   element.setAttribute('aria-label',english?translations.en[key]:originalAria.get(element));
  });
  if(toggle){
   const isOpen=toggle.getAttribute('aria-expanded')==='true';
   toggle.setAttribute('aria-label',english?(isOpen?translations.en.closeNavigation:translations.en.openNavigation):(isOpen?'Tutup menu navigasi':'Buka menu navigasi'));
  }
  const aboutLink=document.querySelector('.about-copy .text-link');
  if(aboutLink){
   const message=english
    ?'Hello Koprek, I would like to ask about a bulk order for an event or a collaboration.'
    :'Halo Koprek, saya ingin bertanya tentang pesanan besar untuk acara atau kolaborasi.';
   aboutLink.href=`https://wa.me/628113068999?text=${encodeURIComponent(message)}`;
  }
  document.querySelectorAll('.dish-card[data-deck-position="0"]').forEach(card=>{
   const dishName=card.querySelector('h3').textContent;
   card.setAttribute('aria-label',english?`Show the next dish after ${dishName}`:`Tampilkan hidangan berikutnya setelah ${dishName}`);
  });
 }

 const languagePicker=document.querySelector('.language-picker');
 if(languagePicker){
  const languageToggle=languagePicker.querySelector('.language-toggle');
  const languageMenu=languagePicker.querySelector('.language-menu');
  const languageOptions=[...languagePicker.querySelectorAll('[data-language]')];
  function setLanguageMenuOpen(isOpen){
   languageToggle.setAttribute('aria-expanded',String(isOpen));
   languageMenu.hidden=!isOpen;
   if(isOpen)languageOptions[0].focus();
  }
  languageToggle.addEventListener('click',()=>{
   setLanguageMenuOpen(languageToggle.getAttribute('aria-expanded')!=='true');
  });
  languageOptions.forEach(option=>option.addEventListener('click',()=>{
   const language=option.dataset.language;
   const flag=language==='en'?'england-flag':'indonesia-flag';
   languageToggle.querySelector('.language-flag').className=`language-flag ${flag}`;
   languageToggle.querySelector('.language-code').textContent=language==='en'?'ENG':'IDN';
   languageOptions.forEach(item=>item.setAttribute('aria-checked',String(item===option)));
   applyLanguage(language);
   languageToggle.focus();
   setLanguageMenuOpen(false);
  }));
  document.addEventListener('pointerdown',event=>{
   if(!languagePicker.contains(event.target))setLanguageMenuOpen(false);
  });
  document.addEventListener('keydown',event=>{
   if(event.key==='Escape'&&languageToggle.getAttribute('aria-expanded')==='true'){
    setLanguageMenuOpen(false);
    languageToggle.focus();
   }
  });
 }

 const heroSlides=[...document.querySelectorAll('[data-hero-slide]')];
 const heroDots=[...document.querySelectorAll('[data-hero-to]')];
 let activeHero=0;
 function showHero(index){
  if(!heroSlides.length)return;
  activeHero=(index+heroSlides.length)%heroSlides.length;
  heroSlides.forEach((slide,slideIndex)=>{
   const active=slideIndex===activeHero;
   slide.classList.toggle('is-active',active);
   slide.setAttribute('aria-hidden',String(!active));
  });
  heroDots.forEach((dot,dotIndex)=>{
   const active=dotIndex===activeHero;
   dot.classList.toggle('is-active',active);
   dot.setAttribute('aria-current',String(active));
  });
 }
 let heroAutoplayTimer;
 function resetHeroAutoplay(){
  window.clearInterval(heroAutoplayTimer);
  if(heroSlides.length>1){
   heroAutoplayTimer=window.setInterval(()=>{
    if(!document.hidden)showHero(activeHero+1);
   },10000);
  }
 }
 document.querySelectorAll('[data-hero-direction]').forEach(button=>{
  button.addEventListener('click',()=>{
   showHero(activeHero+Number(button.dataset.heroDirection));
   resetHeroAutoplay();
  });
 });
 heroDots.forEach((dot,index)=>dot.addEventListener('click',()=>{
  showHero(index);
  resetHeroAutoplay();
 }));
 resetHeroAutoplay();

 const tabs=[...document.querySelectorAll('[data-menu-index]')];
 const decks=[...document.querySelectorAll('[data-menu-deck]')];
 const stage=document.querySelector('.dish-stage');
 if(tabs.length&&decks.length&&stage){
  let activeCategory=0;
  let deckOrder=[];
  let swipeStart=null;
  let suppressClickUntil=0;
  function renderDeck(){
   const cards=[...decks[activeCategory].querySelectorAll('.dish-card')];
   cards.forEach((card,index)=>{
    const position=deckOrder.indexOf(card);
    card.dataset.dishIndex=String(index);
    card.dataset.deckPosition=String(position);
    card.setAttribute('aria-hidden',String(position!==0));
    card.setAttribute('role','button');
    const dishName=card.querySelector('h3').textContent;
    card.setAttribute('aria-label',currentLanguage==='en'?`Show the next dish after ${dishName}`:`Tampilkan hidangan berikutnya setelah ${dishName}`);
    card.inert=position!==0;
    card.tabIndex=position===0?0:-1;
   });
  }
  function shuffleCard(direction=1){
   if(deckOrder.length<2)return;
   if(direction>0)deckOrder.push(deckOrder.shift());
   else deckOrder.unshift(deckOrder.pop());
   renderDeck();
  }
  function showCategory(index){
   activeCategory=(index+tabs.length)%tabs.length;
   tabs.forEach((tab,tabIndex)=>{
    const active=tabIndex===activeCategory;
    tab.classList.toggle('is-active',active);
    tab.setAttribute('aria-selected',String(active));
    tab.tabIndex=active?0:-1;
   });
   decks.forEach((deck,deckIndex)=>{
    const active=deckIndex===activeCategory;
    deck.hidden=!active;
    deck.setAttribute('aria-hidden',String(!active));
    deck.inert=!active;
   });
   deckOrder=[...decks[activeCategory].querySelectorAll('.dish-card')];
   renderDeck();
  }
  tabs.forEach((tab,index)=>{
   tab.addEventListener('click',()=>showCategory(index));
   tab.addEventListener('keydown',event=>{
    let nextIndex;
    if(event.key==='ArrowRight')nextIndex=(activeCategory+1)%tabs.length;
    else if(event.key==='ArrowLeft')nextIndex=(activeCategory-1+tabs.length)%tabs.length;
    else if(event.key==='Home')nextIndex=0;
    else if(event.key==='End')nextIndex=tabs.length-1;
    else return;
    event.preventDefault();
    showCategory(nextIndex);
    tabs[nextIndex].focus();
   });
  });
  document.querySelector('.dish-arrow-prev')?.addEventListener('click',()=>shuffleCard(-1));
  document.querySelector('.dish-arrow-next')?.addEventListener('click',()=>shuffleCard());
  stage.addEventListener('pointerdown',event=>{
   if(event.target.closest('button,a'))return;
   swipeStart={x:event.clientX,y:event.clientY};
  });
  stage.addEventListener('pointerup',event=>{
   if(!swipeStart)return;
   const deltaX=event.clientX-swipeStart.x;
   const deltaY=event.clientY-swipeStart.y;
   swipeStart=null;
   if(Math.abs(deltaX)<45||Math.abs(deltaX)<=Math.abs(deltaY))return;
   suppressClickUntil=Date.now()+400;
   shuffleCard(deltaX<0?1:-1);
  });
  stage.addEventListener('pointercancel',()=>{swipeStart=null});
  stage.addEventListener('keydown',event=>{
   if(event.target.closest('button,a'))return;
   if(event.key==='ArrowRight'){event.preventDefault();shuffleCard()}
   else if(event.key==='ArrowLeft'){event.preventDefault();shuffleCard(-1)}
   else if((event.key==='Enter'||event.key===' ')&&event.target.matches('.dish-card[data-deck-position="0"]')){
    event.preventDefault();
    shuffleCard();
   }
  });
  stage.addEventListener('click',event=>{
   const topCard=event.target.closest('.dish-card[data-deck-position="0"]');
   if(!topCard||Date.now()<suppressClickUntil)return;
   shuffleCard();
  });
  showCategory(activeCategory);
 }
 const year=document.querySelector('[data-year]');
 if(year)year.textContent=String(new Date().getFullYear());
})();
