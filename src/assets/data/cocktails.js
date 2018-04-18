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
import alexander from '../images/cocktails/alexander.jpg'
import americano from '../images/cocktails/americano.jpg'
import angel_face from '../images/cocktails/angel_face.jpg'
import aviation from '../images/cocktails/aviation.jpg'
import bacardi from '../images/cocktails/bacardi.jpg'
import between_sheets from '../images/cocktails/between_sheets.jpg'
import casino from '../images/cocktails/casino.jpg'
import clover_club from '../images/cocktails/clover_club.jpg'
import daiquiri from '../images/cocktails/daiquiri.jpg'
import derby from '../images/cocktails/derby.jpg'
import dry_martini from '../images/cocktails/dry_martini.jpg'
import gin_fizz from '../images/cocktails/gin_fizz.jpg'
import manhattan from '../images/cocktails/manhattan.jpg'
import mary_pickford from '../images/cocktails/mary_pickford.jpg'
import monkey_gland from '../images/cocktails/monkey_gland.jpg'
import negroni from '../images/cocktails/negroni.jpg'
import old_fashioned from '../images/cocktails/old_fashioned.jpg'
import paradise from '../images/cocktails/paradise.jpg'
import planters_punch from '../images/cocktails/planters_punch.jpg'
import porto_flip from '../images/cocktails/planters_punch.jpg'
import ramos_fizz from '../images/cocktails/ramos_fizz.jpg'
import rusty_nail from '../images/cocktails/rusty_nail.jpg'
import sazerac from '../images/cocktails/rusty_nail.jpg'
import screwdriver from '../images/cocktails/screwdriver.jpg'
import sidecar from '../images/cocktails/sidecar.jpg'
import stinger from '../images/cocktails/stinger.jpg'
import tuxedo from '../images/cocktails/tuxedo.jpg'
import whiskey_sour from '../images/cocktails/whiskey_sour.jpg'
import white_lady from '../images/cocktails/white_lady.jpg'

export default  [
    //IBA contemporary classics start
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
    {
      cocktailId: 8,
      name: "French Connection",
      ingredients: [
        {
          ingredientId: 15,
          amount: "35ml"
        },
        {
          ingredientId: 24,
          amount: "35ml"
        }
      ],
      method: "Pour all ingredients directly into old fashioned glass filled with ice cubes. Stir gently.",
      imgUrl: french_connection
    },
    {
      cocktailId: 8,
      name: "God Father",
      ingredients: [
        {
          ingredientId: 25,
          amount: "35ml"
        },
        {
          ingredientId: 24,
          amount: "35ml"
        }
      ],
      method: "Pour all ingredients directly into old fashioned glass filled with ice cubes. Stir gently.",
      imgUrl: god_father
    },
    {
      cocktailId: 9,
      name: "God Mother",
      ingredients: [
        {
          ingredientId: 6,
          amount: "35ml"
        },
        {
          ingredientId: 24,
          amount: "25ml"
        }
      ],
      method: "Pour all ingredients directly into old fashioned glass filled with ice cubes. Stir gently.",
      imgUrl: god_father
    },
    {
      cocktailId: 10,
      name: "Golden Dream",
      ingredients: [
        {
          ingredientId: 27,
          amount: "20ml"
        },
        {
          ingredientId: 26,
          amount: "20ml"
        },
        {
          ingredientId: 28,
          amount: "20ml"
        },
        {
          ingredientId: 29,
          amount: "10ml"
        }
      ],
      method: "Pour all ingredients into shaker filled with ice. Shake briskly for few seconds. Strain into chilled cocktail glass.",
      imgUrl: golden_dream
    },
    {
      cocktailId: 11,
      name: "Grasshopper",
      ingredients: [
        {
          ingredientId: 30,
          amount: "30ml"
        },
        {
          ingredientId: 31,
          amount: "30ml"
        },
        {
          ingredientId: 29,
          amount: "30ml"
        }
      ],
      method: "Pour all ingredients into shaker filled with ice. Shake briskly for few seconds. Strain into chilled cocktail glass.",
      imgUrl: grasshopper
    },
    {
      cocktailId: 12,
      name: "Harvey Wallbanger",
      ingredients: [
        {
          ingredientId: 6,
          amount: "45ml"
        },
        {
          ingredientId: 27,
          amount: "15ml"
        },
        {
          ingredientId: 28,
          amount: "90ml"
        }
      ],
      method: "Pour vodka and orange juice into a highball glass filled with ice. Stir gently and float Galliano on top. Garnish with orange slices and cherry.",
      imgUrl: harvey_wallbanger
    },
    {
      cocktailId: 13,
      name: "Hemingway Special",
      ingredients: [
        {
          ingredientId: 21,
          amount: "60ml"
        },
        {
          ingredientId: 32,
          amount: "15ml"
        },
        {
          ingredientId: 33,
          amount: "40ml"
        },
        {
          ingredientId: 20,
          amount: "15ml"
        }
      ],
      method: "Pour all ingredients into a shaker with ice. Shake. Strain into a double cocktail glass.",
      imgUrl: hemingway_special
    },
    {
      cocktailId: 14,
      name: "Horse's Neck",
      ingredients: [
        {
          ingredientId: 34,
          amount: "40ml"
        },
        {
          ingredientId: 35,
          amount: "120ml"
        },
        {
          ingredientId: 16,
          amount: "1 Dash"
        }
      ],
      method: "Pour brandy and ginger ale directly into hi-ball glass with ice cubes. Stir gently. Garnish with rind of one lemon spiral. If required, add dashes of Angostura bitters.",
      imgUrl: horses_neck
    },
    {
      cocktailId: 15,
      name: "Irish Coffee",
      ingredients: [
        {
          ingredientId: 36,
          amount: "40ml"
        },
        {
          ingredientId: 37,
          amount: "90ml"
        },
        {
          ingredientId: 29,
          amount: "30ml"
        },
        {
          ingredientId: 17,
          amount: "1 Teaspoon"
        }
      ],
      method: "Warm the Irish whiskey over a burner. Pour into the glass (for hot drink) hot coffee, and add a teaspoon of sugar. Float Cream on top.",
      imgUrl: irish_coffee
    },
    {
      cocktailId: 16,
      name: "Kir",
      ingredients: [
        {
          ingredientId: 38,
          amount: "90ml"
        },
        {
          ingredientId: 39,
          amount: "10ml"
        }
      ],
      method: "Pour Crème de Cassis into glass, top up with white wine. For Kir Royal: Use champagne instead of white wine.",
      imgUrl: kir
    },
    {
      cocktailId: 17,
      name: "Long Island Ice Tea",
      ingredients: [
        {
          ingredientId: 22,
          amount: "15ml"
        },
        {
          ingredientId: 40,
          amount: "15ml"
        },
        {
          ingredientId: 6,
          amount: "15ml"
        },
        {
          ingredientId: 21,
          amount: "15ml"
        },
        {
          ingredientId: 26,
          amount: "15ml"
        },
        {
          ingredientId: 41,
          amount: "30ml"
        },
        {
          ingredientId: 9,
          amount: "25ml"
        },
        {
          ingredientId: 2,
          amount: "1 Dash"
        }
      ],
      method: "Add all ingredients into highball glass filled with ice. Stir gently. Garnish with lemon spiral. Serve with straw.",
      imgUrl: long_island_ice_tea
    },
    {
      cocktailId: 18,
      name: "Mai-Tai",
      ingredients: [
        {
          ingredientId: 21,
          amount: "40ml"
        },
        {
          ingredientId: 42,
          amount: "20ml"
        },
        {
          ingredientId: 43,
          amount: "15ml"
        },
        {
          ingredientId: 44,
          amount: "15ml"
        },
        {
          ingredientId: 20,
          amount: "10ml"
        }
      ],
      method: "Shake and strain into highball glass. Garnish with pineapple spear, mint leaves and lime peel. Serve with straw.",
      imgUrl: mai_tai
    },
    {
      cocktailId: 20,
      name: "Margarita",
      ingredients: [
        {
          ingredientId: 40,
          amount: "35ml"
        },
        {
          ingredientId: 18,
          amount: "20ml"
        },
        {
          ingredientId: 20,
          amount: "15ml"
        }
      ],
      method: "Pour all ingredients into shaker with ice. Shake well and strain into cocktail glass rimmed with salt",
      imgUrl: margarita
    },
    {
      cocktailId: 21,
      name: "Mimosa",
      ingredients: [
        {
          ingredientId: 14,
          amount: "75ml"
        },
        {
          ingredientId: 28,
          amount: "75ml"
        }
      ],
      method: "Pour orange juice into flute and gently pour Champagne. Stir gently. Garnish with orange twist (optional). Note: a Buck’s Fizz and a Mimosa are the same drink.",
      imgUrl: mimosa
    },
    {
      cocktailId: 22,
      name: "Mint Julep",
      ingredients: [
        {
          ingredientId: 36,
          amount: "60ml"
        },
        {
          ingredientId: 46,
          amount: "4 Sprigs"
        },
        {
          ingredientId: 17,
          amount: "1 Teaspoon"
        },
        {
          ingredientId: 47,
          amount: "2 Teaspoons"
        }
      ],
      method: "In a highball glass gently muddle the mint, sugar and water. Fill the glass with cracked ice, add Bourbon and stir well until the glass is frost. Garnish with a mint spring.",
      imgUrl: mint_julep
    },
    {
      cocktailId: 23,
      name: "Mojito",
      ingredients: [
        {
          ingredientId: 21,
          amount: "40ml"
        },
        {
          ingredientId: 20,
          amount: "30ml"
        },
        {
          ingredientId: 46,
          amount: "5 Sprigs"
        },
        {
          ingredientId: 17,
          amount: "2 Teaspoons"
        },
        {
          ingredientId: 47,
          amount: ""
        }
      ],
      method: "Muddle mint springs with sugar and lime juice. Add splash of soda water and fill glass with cracked ice. Pour rum and top with soda water. Garnish with spring of mint leaves and lemon slice. Serve with straw.",
      imgUrl: mojito
    },
    {
      cocktailId: 24,
      name: "Moscow Mule",
      ingredients: [
        {
          ingredientId: 6,
          amount: "45ml"
        },
        {
          ingredientId: 59,
          amount: "120ml"
        },
        {
          ingredientId: 20,
          amount: "5ml"
        },
        {
          ingredientId: 3,
          amount: "1 Slice"
        }
      ],
      method: "Combine the vodka and ginger beer. Add lime juice. Garnish with a lime slice.",
      imgUrl: moscow_mule
    },
    {
      cocktailId: 25,
      name: "Pina Colada",
      ingredients: [
        {
          ingredientId: 21,
          amount: "30ml"
        },
        {
          ingredientId: 48,
          amount: "90ml"
        },
        {
          ingredientId: 49,
          amount: "30ml"
        }
      ],
      method: "Blend all the ingredients with ice in a electric blender, pour into a large goblet or Hurricane glass and serve with straws. Garnish with a slice of pineapple with a cocktail cherry.",
      imgUrl: pina_colada
    },
    {
      cocktailId: 26,
      name: "Rose",
      ingredients: [
        {
          ingredientId: 60,
          amount: "20ml"
        },
        {
          ingredientId: 50,
          amount: "20ml"
        },
        {
          ingredientId: 51,
          amount: "3 Dashes"
        }
      ],
      method: "Stir all ingredients with ice and strain into a cocktail glass.",
      imgUrl: rose
    },
    {
      cocktailId: 26,
      name: "Sea Breeze",
      ingredients: [
        {
          ingredientId: 6,
          amount: "40ml"
        },
        {
          ingredientId: 19,
          amount: "120ml"
        },
        {
          ingredientId: 33,
          amount: "30ml"
        }
      ],
      method: "Build all ingredients in a rock glass filled with ice. Garnish with lime wedge.",
      imgUrl: sea_breeze
    },
    {
      cocktailId: 27,
      name: "Sex on the Beach",
      ingredients: [
        {
          ingredientId: 6,
          amount: "40ml"
        },
        {
          ingredientId: 54,
          amount: "20ml"
        },
        {
          ingredientId: 19,
          amount: "40ml"
        },
        {
          ingredientId: 28,
          amount: "40ml"
        }
      ],
      method: "Build all ingredients in a highball glass filled with ice. Garnish with orange slice.",
      imgUrl: sex_on_the_beach
    },
    {
      cocktailId: 28,
      name: "Singapore Sling",
      ingredients: [
        {
          ingredientId: 22,
          amount: "30ml"
        },
        {
          ingredientId: 55,
          amount: "15ml"
        },
        {
          ingredientId: 18,
          amount: "7.5ml"
        },
        {
          ingredientId: 58,
          amount: "7.5ml"
        },
        {
          ingredientId: 57,
          amount: "10ml"
        },
        {
          ingredientId: 48,
          amount: "120ml"
        },
        {
          ingredientId: 20,
          amount: "15ml"
        },
        {
          ingredientId: 16,
          amount: "1 Dash"
        }
      ],
      method: "Pour all ingredients into cocktail shaker filled with ice cubes. Shake well. Strain into highball glass. Garnish with pineapple and cocktail cher",
      imgUrl: singapore_sling
    },
    {
      cocktailId: 29,
      name: "Tequila Sunrise",
      ingredients: [
        {
          ingredientId: 40,
          amount: "45ml"
        },
        {
          ingredientId: 28,
          amount: "90ml"
        },
        {
          ingredientId: 57,
          amount: "15ml"
        }
      ],
      method: "Pour tequila and orange juice directly into highball with ice cubes. Add a splash of grenadine to create chromatic effect (sunrise), do not stir. Garnish with orange slice and cherry.",
      imgUrl: tequila_sunrise
    },
    //IBA contemporary classics end
    //IBA the unforgettables start
    {
      cocktailId: 30,
      name: "Alexander",
      ingredients: [
        {
          ingredientId: 15,
          amount: "30ml"
        },
        {
          ingredientId: 30,
          amount: "30ml"
        },
        {
          ingredientId: 29,
          amount: "30ml"
        }
      ],
      method: "Shake and strain into a chilled cocktail glass. Sprinkle with fresh ground nutmeg.",
      imgUrl: alexander
    },
    {
      cocktailId: 31,
      name: "Americano",
      ingredients: [
        {
          ingredientId: 61,
          amount: "30ml"
        },
        {
          ingredientId: 62,
          amount: "30ml"
        },
        {
          ingredientId: 47,
          amount: "A Splash"
        }
      ],
      method: "Mix the ingredients directly in an old-fashioned glass filled with ice-cubes, add a splash of soda water and garnish with half orange slice.",
      imgUrl: americano
    },
    {
      cocktailId: 32,
      name: "Angel Face",
      ingredients: [
        {
          ingredientId: 63,
          amount: "30ml"
        },
        {
          ingredientId: 22,
          amount: "30ml"
        },
        {
          ingredientId: 64,
          amount: "30ml"
        }
      ],
      method: "Pour all ingredients into a shaker with ice. Shake. Strain into a cocktail glass.",
      imgUrl: angel_face
    },
    {
      cocktailId: 33,
      name: "Aviation",
      ingredients: [
        {
          ingredientId: 22,
          amount: "45ml"
        },
        {
          ingredientId: 32,
          amount: "15ml"
        },
        {
          ingredientId: 9,
          amount: "15ml"
        }
      ],
      method: "Shake and strain into a chilled cocktail glass.",
      imgUrl: aviation
    },
    {
      cocktailId: 34,
      name: "Bacardi",
      ingredients: [
        {
          ingredientId: 21,
          amount: "45ml"
        },
        {
          ingredientId: 10,
          amount: "20ml"
        },
        {
          ingredientId: 57,
          amount: "10ml"
        }
      ],
      method: "Pour all ingredients into shaker with ice cubes, shake well, strain into chilled cocktail glass.",
      imgUrl: bacardi
    },
    {
      cocktailId: 35,
      name: "Between the Sheets",
      ingredients: [
        {
          ingredientId: 15,
          amount: "30ml"
        },
        {
          ingredientId: 21,
          amount: "30ml"
        },
        {
          ingredientId: 26,
          amount: "30ml"
        },
        {
          ingredientId: 9,
          amount: "20ml"
        }
      ],
      method: "Pour all ingredients into shaker with ice cubes, shake, strain into chilled cocktail glass.",
      imgUrl: between_sheets
    },
    {
      cocktailId: 36,
      name: "Casino",
      ingredients: [
        {
          ingredientId: 22,
          amount: "40ml"
        },
        {
          ingredientId: 32,
          amount: "10ml"
        },
        {
          ingredientId: 65,
          amount: "10ml"
        },
        {
          ingredientId: 9,
          amount: "20ml"
        }
      ],
      method: "Pour all ingredients into shaker with ice cubes, shake well. Strain into chilled cocktail glass and garnish with a lemon twist and a marachino cherry.",
      imgUrl: casino
    },
    {
      cocktailId: 37,
      name: "Clover Club",
      ingredients: [
        {
          ingredientId: 22,
          amount: "45ml"
        },
        {
          ingredientId: 66,
          amount: "15ml"
        },
        {
          ingredientId: 9,
          amount: "15ml"
        },
        {
          ingredientId: 67,
          amount: "A Few Drops"
        }
      ],
      method: "Pour all ingredients into cocktail shaker filled with ice. Shake well. Strain into cocktail glass.",
      imgUrl: clover_club
    },
    {
      cocktailId: 38,
      name: "Daiquiri",
      ingredients: [
        {
          ingredientId: 21,
          amount: "45ml"
        },
        {
          ingredientId: 68,
          amount: "15ml"
        },
        {
          ingredientId: 20,
          amount: "25ml"
        }
      ],
      method: "Shake and strain into a cocktail glass.",
      imgUrl: daiquiri
    },
    {
      cocktailId: 39,
      name: "Derby",
      ingredients: [
        {
          ingredientId: 22,
          amount: "60ml"
        },
        {
          ingredientId: 69,
          amount: "2 Drops"
        },
        {
          ingredientId: 46,
          amount: "2 Leafs"
        }
      ],
      method: "Pour all ingredients into a mixing glass with ice. Stir. Strain into a cocktail glass. Garnish with a fresh mint leaves in the drink.",
      imgUrl: derby
    },
    {
      cocktailId: 40,
      name: "Dry Martini",
      ingredients: [
        {
          ingredientId: 22,
          amount: "60ml"
        },
        {
          ingredientId: 50,
          amount: "10ml"
        }
      ],
      method: "Pour all ingredients into mixing glass with ice cubes. Stir well. Strain in chilled martini glass. Squeeze oil from lemon peel onto the drink, or garnish with olive.",
      imgUrl: dry_martini
    },
    {
      cocktailId: 41,
      name: "Gin Fizz",
      ingredients: [
        {
          ingredientId: 22,
          amount: "45ml"
        },
        {
          ingredientId: 23,
          amount: "10ml"
        },
        {
          ingredientId: 9,
          amount: "30ml"
        },
        {
          ingredientId: 47,
          amount: "80ml"
        }
      ],
      method: "Shake all ingredients with ice cubes, except soda water. Pour into tumbler. Top with soda water. Garnish with lemon slice.",
      imgUrl: gin_fizz
    },
    {
      cocktailId: 42,
      name: "Manhattan",
      ingredients: [
        {
          ingredientId: 36,
          amount: "50ml"
        },
        {
          ingredientId: 62,
          amount: "10ml"
        },
        {
          ingredientId: 16,
          amount: "1 Dash"
        }
      ],
      method: "Pour all ingredients into mixing glass with ice cubes. Stir well. Strain into chilled cocktail glass.Garnish with cocktail cherry.",
      imgUrl: manhattan
    },
    {
      cocktailId: 43,
      name: "Mary Pickford",
      ingredients: [
        {
          ingredientId: 21,
          amount: "60ml"
        },
        {
          ingredientId: 32,
          amount: "10ml"
        },
        {
          ingredientId: 57,
          amount: "10ml"
        },
        {
          ingredientId: 48,
          amount: "60ml"
        }
      ],
      method: "Shake and strain into a chilled large cocktail glass.",
      imgUrl: mary_pickford
    },
    {
      cocktailId: 44,
      name: "Monkey Gland",
      ingredients: [
        {
          ingredientId: 22,
          amount: "50ml"
        },
        {
          ingredientId: 28,
          amount: "30ml"
        },
        {
          ingredientId: 70,
          amount: "2 Drops"
        },
        {
          ingredientId: 57,
          amount: "2 Drops"
        }
      ],
      method: "Shake and strain into a chilled cocktail glass.",
      imgUrl: monkey_gland
    },
    {
      cocktailId: 45,
      name: "Negroni",
      ingredients: [
        {
          ingredientId: 22,
          amount: "30ml"
        },
        {
          ingredientId: 61,
          amount: "30ml"
        },
        {
          ingredientId: 62,
          amount: "30ml"
        }
      ],
      method: "Pour all ingredients directly into old-fashioned glass filled with ice. Stir gently.Garnish with half orange slice.",
      imgUrl: negroni
    },
    {
      cocktailId: 46,
      name: "Old Fashioned",
      ingredients: [
        {
          ingredientId: 36,
          amount: "45ml"
        },
        {
          ingredientId: 16,
          amount: "2 Dashes"
        },
        {
          ingredientId: 17,
          amount: "1 Cube"
        },
        {
          ingredientId: 71,
          amount: "Few Dashes"
        }
      ],
      method: "Place sugar cube in old-fashioned glass and saturate with bitters, add a dash of plain water. Muddle until dissolve. Fill the glass with ice cubes and add whiskey. Garnish with orange slice and a cocktail cherry.",
      imgUrl: old_fashioned
    },
    {
      cocktailId: 47,
      name: "Paradise",
      ingredients: [
        {
          ingredientId: 22,
          amount: "35ml"
        },
        {
          ingredientId: 64,
          amount: "20ml"
        },
        {
          ingredientId: 28,
          amount: "15ml"
        }
      ],
      method: "Pour all ingredients into cocktail shaker filled with ice. Shake and strain into chilled cocktail glass.",
      imgUrl: paradise
    },
    {
      cocktailId: 48,
      name: "Planter's Punch",
      ingredients: [
        {
          ingredientId: 42,
          amount: "45ml"
        },
        {
          ingredientId: 28,
          amount: "35ml"
        },
        {
          ingredientId: 48,
          amount: "35ml"
        },
        {
          ingredientId: 9,
          amount: "20ml"
        },
        {
          ingredientId: 57,
          amount: "10ml"
        },
        {
          ingredientId: 23,
          amount: "10ml"
        },
        {
          ingredientId: 16,
          amount: "3 to 4 Dashes"
        }
      ],
      method: "Pour all ingredients, except the bitters, into shaker filled with ice. Shake well. Pour into large glass, filled with ice. Add Angostura bitters, “on top”. Garnish with cocktail cherry and pineapple.",
      imgUrl: planters_punch
    },
    {
      cocktailId: 49,
      name: "Porto Flip",
      ingredients: [
        {
          ingredientId: 34,
          amount: "15ml"
        },
        {
          ingredientId: 72,
          amount: "45ml"
        },
        {
          ingredientId: 73,
          amount: "10ml"
        }
      ],
      method: "Pour all ingredients into cocktail shaker filled with ice. Shake well. Strain into cocktail glass. Sprinkle with fresh ground nutmeg.",
      imgUrl: porto_flip
    },
    {
      cocktailId: 50,
      name: "Ramos Gin Fizz",
      ingredients: [
        {
          ingredientId: 22,
          amount: "45ml"
        },
        {
          ingredientId: 23,
          amount: "30ml"
        },
        {
          ingredientId: 20,
          amount: "15ml"
        },
        {
          ingredientId: 9,
          amount: "15ml"
        },
        {
          ingredientId: 29,
          amount: "60ml"
        },
        {
          ingredientId: 67,
          amount: "1 Egg Worth"
        },
        {
          ingredientId: 74,
          amount: "3 Dashes"
        },
        {
          ingredientId: 75,
          amount: "2 Drops"
        }
      ],
      method: "Pour all ingredients (except soda) in a mixing glass, dry shake (no ice) for two minutes, add ice and hard shake for another minute. Strain into a highball glass without ice, top with soda.",
      imgUrl: ramos_fizz
    },
    {
      cocktailId: 51,
      name: "Rusty Nail",
      ingredients: [
        {
          ingredientId: 36,
          amount: "45ml"
        },
        {
          ingredientId: 76,
          amount: "25ml"
        },
      ],
      method: "Pour all ingredients directly into old-fashioned glass filled with ice. Stir gently. Garnish with lemon twist.",
      imgUrl: rusty_nail
    },
    {
      cocktailId: 52,
      name: "Sazerac",
      ingredients: [
        {
          ingredientId: 15,
          amount: "50ml"
        },
        {
          ingredientId: 70,
          amount: "10ml"
        },
        {
          ingredientId: 17,
          amount: "1 Cube"
        },
        {
          ingredientId: 16,
          amount: "2 Dashes"
        },
      ],
      method: "Rinse a chilled old-fashioned glass with the absinthe, add crushed ice and set it aside. Stir the remaining ingredients over ice and set it aside. Discard the ice and any excess absinthe from the prepared glass, and strain the drink into the glass. Add the Lemon peel for garnish. Note: The original recipe changed after the American Civil War, rye whiskey substituted cognac as it became hard to obtain.",
      imgUrl: sazerac
    },
    {
      cocktailId: 53,
      name: "Screwdriver",
      ingredients: [
        {
          ingredientId: 6,
          amount: "50ml"
        },
        {
          ingredientId: 28,
          amount: "100ml"
        }
      ],
      method: "Pour all ingredients into a highball glass filled with ice. Stir gently. Garnish with an orange slice.",
      imgUrl: screwdriver
    },
    {
      cocktailId: 54,
      name: "Sidecar",
      ingredients: [
        {
          ingredientId: 15,
          amount: "50ml"
        },
        {
          ingredientId: 26,
          amount: "20ml"
        },
        {
          ingredientId: 9,
          amount: "20ml"
        }
      ],
      method: "Pour all ingredients into cocktail shaker filled with ice. Shake well and strain into cocktail glass.",
      imgUrl: sidecar
    },
    {
      cocktailId: 55,
      name: "Stinger",
      ingredients: [
        {
          ingredientId: 15,
          amount: "50ml"
        },
        {
          ingredientId: 77,
          amount: "20ml"
        }
      ],
      method: "Pour all ingredients into a mixing glass with ice. Stir. Strain into a cocktail glass.",
      imgUrl: stinger
    },
    {
      cocktailId: 56,
      name: "Tuxedo",
      ingredients: [
        {
          ingredientId: 22,
          amount: "30ml"
        },
        {
          ingredientId: 50,
          amount: "30ml"
        },
        {
          ingredientId: 32,
          amount: "1/2 Bar Spoon"
        },
        {
          ingredientId: 70,
          amount: "1/2 Bar Spoon"
        },
        {
          ingredientId: 65,
          amount: "3 Dashes"
        }
      ],
      method: "Stir all ingredients with ice and strain into cocktail glass. Garnish with a cocktail cherry and a lemon zest twist.",
      imgUrl: tuxedo
    },
    {
      cocktailId: 57,
      name: "Whisky Sour",
      ingredients: [
        {
          ingredientId: 36,
          amount: "45ml"
        },
        {
          ingredientId: 23,
          amount: "15ml"
        },
        {
          ingredientId: 9,
          amount: "30ml"
        }
      ],
      method: "Dash egg white (Optional: if used shake little harder to foam up the egg white). Pour all ingredients into cocktail shaker filled with ice. Shake well. Strain in cocktail glass. If served ‘On the rocks’, strain ingredients into old-fashioned glass filled with ice. Garnish with half orange slice and maraschino cherry.",
      imgUrl: whiskey_sour
    },
    {
      cocktailId: 58,
      name: "White Lady",
      ingredients: [
        {
          ingredientId: 22,
          amount: "40ml"
        },
        {
          ingredientId: 26,
          amount: "30ml"
        },
        {
          ingredientId: 9,
          amount: "20ml"
        }
      ],
      method: "Add all ingredients into cocktail shaker filled with ice. Shake well and strain into large cocktail glass.",
      imgUrl: white_lady
    },
];
