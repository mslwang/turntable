class RecipesController < ApplicationController
    before_action :authenticate_user!

    def index
    end

    def create
        @user = User.find(current_user.id)
        @recipe = @user.recipes.create(recipe_params)
        if @recipe.save
            redirect_to '/'
        else 
            render 'new'
        end
    end

    private
  
    def recipe_params
      params.permit(:title, :author, :photo, :desc)
    end
end
