Rails.application.routes.draw do
  namespace :api do
    resources :profiles
    resources :articles
    get "search/:query", :to => "articles#search"
      end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
