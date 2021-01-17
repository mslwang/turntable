class Api::V1::RecipesController < Api::V1::BaseController

    def index
        respond_with(@recipes = Recipe.where(["user_id = ?", params["user_id"]]).all)
    end
  
    # def create
    #   respond_with :api, :v1, Recipe.create(recipe_params)
    # end
  
    # def destroy
    #   respond_with Recipe.destroy(params["id"])
    # end
  
    # def update
    #   recipe = Recipe.find(params["id"])
    #   recipe.update_attributes(recipe_params)
    #   respond_with recipe, json: recipe
    # end

    def show
        respond_with Recipe.find(params["id"])
    end


    # private
  
    # def recipe_params
    #   params.require(:recipe).permit(:id, :title, :photo, :desc, :user_id)
    # end
  end