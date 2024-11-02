const chooseColor = document.querySelectorAll('.choose-colour__btn');
const contentItem = document.querySelectorAll('.content-item');

chooseColor.forEach(function(element){
    element.addEventListener('click', open)
});

function open(evt){

    const target = evt.currentTarget;
    const button = target.dataset.button;
    const contentActive = document.querySelectorAll(`.${button}`);

    chooseColor.forEach(function(item){
        item.classList.remove('choose-colour__btn--active')
    });

    target.classList.add('choose-colour__btn--active')

    contentItem.forEach(function(item){
        item.classList.remove('content-itema-ctive')
    });

    contentActive.forEach(function(item){
        item.classList.add('content-itema-ctive')
    });
}