Rails.application.routes.draw do
  devise_for :users

  namespace :api do
    namespace :v1 do

      resources :users, only: [:index, :show], defaults: {format: :json} do
        resources :recipes, only: [:index, :show]
        resources :all
      end
      resources :users, only: [:index, :show]
    end
  end
  resources :recipes, only: [:index, :create]
  root to: 'pages#index'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
