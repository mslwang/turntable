class Api::V1::AllController < Api::V1::RecipesController
    def index
        respond_with Recipe.all
    end
end
