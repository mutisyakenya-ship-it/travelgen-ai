type Props={

favorite:boolean;

onClick:()=>void;

};

function FavoriteButton({

favorite,

onClick

}:Props){

return(

<button

onClick={onClick}

className="
rounded-xl
bg-pink-600
px-5
py-3
text-white
hover:bg-pink-700
transition
"

>

{

favorite

?

"❤️ Favorited"

:

"🤍 Favorite"

}

</button>

);

}

export default FavoriteButton;