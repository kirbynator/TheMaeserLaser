Rails.application.routes.draw do
  namespace :api do
    resources :profiles
    resources :articles
    get "search/:query", :to => "articles#search"
      end
      get '*other', to: 'static#index'
end
