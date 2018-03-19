import bellini from '../images/cocktails/bellini.jpg'
import black_russian from '../images/cocktails/black_russian.jpg'
import bloody_mary from '../images/cocktails/bloody_mary.jpg'
import champange_cocktail from '../images/cocktails/champagne_cocktail.jpg'
import cosmopolitan from '../images/cocktails/cosmopolitan.jpg'
import cuba_libre from '../images/cocktails/cuba_libre.jpg'
import french_75 from '../images/cocktails/french75.jpg'
import french_connection from '../images/cocktails/french_connection.jpg'
import god_father from '../images/cocktails/godfather.jpg'
import golden_dream from '../images/cocktails/golden_dream.jpg'
import grasshopper from '../images/cocktails/grasshopper.jpg'
import harvey_wallbanger from '../images/cocktails/harvey_wallbanger.jpg'
import hemingway_special from '../images/cocktails/hemingway_special.jpg'
import horses_neck from '../images/cocktails/horse_neck.jpg'
import irish_coffee from '../images/cocktails/irish_coffee.jpg'
import kir from '../images/cocktails/kir.jpg'
import long_island_ice_tea from '../images/cocktails/long_island_tea.jpg'
import mai_tai from '../images/cocktails/mai_tai.jpg'
import margarita from '../images/cocktails/margarita.jpg'
import mimosa from '../images/cocktails/mimosa.jpg'
import mint_julep from '../images/cocktails/mint_julep.jpg'
import mojito from '../images/cocktails/mojito.jpg'
import moscow_mule from '../images/cocktails/moscow_mule.jpg'
import pina_colada from '../images/cocktails/pina_colada.jpg'
import rose from '../images/cocktails/rose.jpg'
import sea_breeze from '../images/cocktails/sea_breeze.jpg'
import sex_on_the_beach from '../images/cocktails/sex_on_beach.jpg'
import singapore_sling from '../images/cocktails/singapore_sling.jpg'
import tequila_sunrise from '../images/cocktails/tequila_sunrise.jpg'

export default  [
    {
      cocktailId: 1,
      name: "Bellini",
      ingredients: [
        {
          ingredientId: 4,
          amount: "100ml"
        },
        {
          ingredientId: 5,
          amount: "50ml"
        }
      ],
      method: "Pour peach puree into chilled glass and add sparkling wine. Stir gently.",
      imgUrl: bellini
    },
    {
      cocktailId: 2,
      name: "Black Russian",
      ingredients: [
        {
          ingredientId: 6,
          amount: "50ml"
        },
        {
          ingredientId: 7,
          amount: "20ml"
        }
      ],
      method: "Pour the ingredients into the old fashioned-glass filled with ice cubes. Stir gently." +
"Note: for White Russian, float fresh cream on the top and stir gently.",
      imgUrl: black_russian
    },
    {
      cocktailId: 3,
      name: "Bloody Mary",
      ingredients: [
        {
          ingredientId: 6,
          amount: "45ml"
        },
        {
          ingredientId: 8,
          amount: "90ml"
        },
        {
          ingredientId: 9,
          amount: "15ml"
        },
        {
          ingredientId: 10,
          amount: "2 Dashes"
        },
        {
          ingredientId: 11,
          amount: ""
        },
        {
          ingredientId: 12,
          amount: ""
        },
        {
          ingredientId: 13,
          amount: ""
        }
      ],
      method: "Stir gently, pour all ingredients into highball glass. Garnish with celery and lemon wedge (optional).",
      imgUrl: bloody_mary
    },
    {
      cocktailId: 4,
      name: "Champange Cocktail",
      ingredients: [
        {
            ingredientId: 14,
            amount: "90ml"
        },
        {
          ingredientId: 15,
          amount: "10ml"
        },
        {
          ingredientId: 16,
          amount: "2 Dashes"
        },
        {
          ingredientId: 17,
          amount: "1 Cube"
        }
      ],
      method: "Add dash of Angostura bitter onto sugar cube and drop it into champagne flute. Add cognac followed by pouring gently chilled champagne.",
      imgUrl: champange_cocktail
    },
    {
      cocktailId: 5,
      name: "Cosmopolitan",
      ingredients: [
        {
          ingredientId: 6,
          amount: "40ml"
        },
        {
          ingredientId: 18,
          amount: "15ml"
        },
        {
          ingredientId: 19,
          amount: "30ml"
        },
        {
          ingredientId: 20,
          amount: "15ml"
        }
      ],
      method: "Shake all ingredients in cocktail shaker filled with ice.Strain into a large cocktail glass .Garnish with lime slice.",
      imgUrl: cosmopolitan
    },
    {
      cocktailId: 6,
      name: "Cuba Libre",
      ingredients: [
        {
          ingredientId: 21,
          amount: "50ml"
        },
        {
          ingredientId: 2,
          amount: "120ml"
        },
        {
          ingredientId: 20,
          amount: "10ml"
        }
      ],
      method: "Build all ingredients in a highball glass filled with ice. Garnish with lime wedge.",
      imgUrl: cuba_libre
    },
    {
      cocktailId: 7,
      name: "French 75",
      ingredients: [
        {
          ingredientId: 22,
          amount: "30ml"
        },
        {
          ingredientId: 9,
          amount: "15ml"
        },
        {
          ingredientId: 17,
          amount: "2 Pinches"
        },
        {
          ingredientId: 14,
          amount: "60ml"
        }
      ],
      method: "Pour all the ingredients, except champagne, into a shaker. Shake.Strain into a champagne flute.Top up with champagne. Stir gently.",
      imgUrl: french_75
    },
    /*{
      cocktailId: 8,
      name: "French Connection",
      ingredients: [
        15, 24
      ],
      imgUrl: french_connection
    },
    {
      cocktailId: 8,
      name: "God Father",
      ingredients: [
        25, 24
      ],
      imgUrl: god_father
    },
    {
      cocktailId: 9,
      name: "God Mother",
      ingredients: [
        6, 24
      ],
      imgUrl: god_father
    },
    {
      cocktailId: 10,
      name: "Golden Dream",
      ingredients: [
        27, 26, 28, 29
      ],
      imgUrl: golden_dream
    },
    {
      cocktailId: 11,
      name: "Grasshopper",
      ingredients: [
        30, 31, 29
      ],
      imgUrl: grasshopper
    },
    {
      cocktailId: 12,
      name: "Harvey Wallbanger",
      ingredients: [
        6, 27, 28
      ],
      imgUrl: harvey_wallbanger
    },
    {
      cocktailId: 13,
      name: "Hemingway Special",
      ingredients: [
        21, 32, 33, 20
      ],
      imgUrl: hemingway_special
    },
    {
      cocktailId: 14,
      name: "Horse's Neck",
      ingredients: [
        34, 35, 16
      ],
      imgUrl: horses_neck
    },
    {
      cocktailId: 15,
      name: "Irish Coffee",
      ingredients: [
        36, 37, 29, 17
      ],
      imgUrl: irish_coffee
    },
    {
      cocktailId: 16,
      name: "Kir",
      ingredients: [
        38, 39
      ],
      imgUrl: kir
    },
    {
      cocktailId: 17,
      name: "Long Island Ice Tea",
      ingredients: [
        22, 40, 6, 21, 26, 41, 9, 2
      ],
      imgUrl: long_island_ice_tea
    },
    {
      cocktailId: 18,
      name: "Mai-Tai",
      ingredients: [
        21, 42, 43, 44, 20
      ],
      imgUrl: mai_tai
    },
    {
      cocktailId: 20,
      name: "Margarita",
      ingredients: [
        40, 18, 20
      ],
      imgUrl: margarita
    },
    {
      cocktailId: 21,
      name: "Mimosa",
      ingredients: [
        14, 28
      ],
      imgUrl: mimosa
    },
    {
      cocktailId: 22,
      name: "Mint Julep",
      ingredients: [
        36, 46, 17, 47
      ],
      imgUrl: mint_julep
    },
    {
      cocktailId: 23,
      name: "Mojito",
      ingredients: [
        21, 20, 46, 17, 47
      ],
      imgUrl: mojito
    },
    {
      cocktailId: 24,
      name: "Moscow Mule",
      ingredients: [
        6, 35, 20, 3
      ],
      imgUrl: moscow_mule
    },
    {
      cocktailId: 25,
      name: "Pina Colada",
      ingredients: [
        21, 48, 49
      ],
      imgUrl: pina_colada
    },
    {
      cocktailId: 26,
      name: "Rose",
      ingredients: [
        50, 51
      ],
      imgUrl: rose
    },
    {
      cocktailId: 26,
      name: "Sea Breeze",
      ingredients: [
        6, 19, 33
      ],
      imgUrl: sea_breeze
    },
    {
      cocktailId: 27,
      name: "Sex on the Beach",
      ingredients: [
        6, 54, 19, 28
      ],
      imgUrl: sex_on_the_beach
    },
    {
      cocktailId: 28,
      name: "Singapore Sling",
      ingredients: [
        22, 55, 18, 58, 57, 48, 20, 16
      ],
      imgUrl: singapore_sling
    },
    {
      cocktailId: 29,
      name: "Tequila Sunrise",
      ingredients: [
        40, 28, 57
      ],
      imgUrl: tequila_sunrise
    }*/
];
