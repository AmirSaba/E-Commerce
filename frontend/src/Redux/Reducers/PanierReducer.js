
// Le InitialeState va contenir tous les elements du client ajoutés dans le panier
const InitialeState = { ElementDuPanier: [] };



const AjouterElement = (state = InitialeState, action) => {
    let nextState;
    switch (action.type) {
      case "AjouterAuPanier":
          console.log(action.value.NomDuProduit);
        const ElementIndexx = state.ElementDuPanier.findIndex(
          (item) => item === action.value.NomDuProduit
        );
        console.log(state.ElementDuPanier);
        console.log(ElementIndexx)
        if (ElementIndexx !== -1) {
        
        // Dans ce cas le produit est déja ajouter au panier 
        // On le supprime alors de la liste des produits  
            nextState = {
            ...state,
            ElementDuPanier: state.ElementDuPanier.filter((item,index) => index !== ElementIndexx),
          };
          console.log(nextState);

        } else {
        // Le Produit n'existe pas dans le panier 
        // Ajout du produit sélectionner dans le panier
          nextState = {
            ...state,
            ElementDuPanier: [...state.ElementDuPanier, action.value.NomDuProduit],
          };
          console.log(nextState);
        }
        return nextState || state;


       
        /*
      case "SupprimerDuPanier":
        console.log(action.value.NomProduit);
        const ElementIndex = state.ElementDuPanier.findIndex(
          (item) => item.NomProduit === action.value.NomProduit
        );
        console.log(ElementIndex);
        if (ElementIndex !== -1) {
          nextState = {
            ...state,
            ElementDuPanier: state.ElementDuPanier.splice(ElementIndex, 1),
          };
        }
        */
      default:
        return state;
    }
  };
  export default AjouterElement;
  