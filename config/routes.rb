Rails.application.routes.draw do
  
  
  namespace :api do
    resources :doctors do
      resources :appointments
    end
     
    resources :users 
  end
  
end
