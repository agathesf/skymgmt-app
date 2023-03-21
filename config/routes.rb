Rails.application.routes.draw do
	devise_for :users
	devise_scope :user do
	  get '/users/sign_out' => 'devise/sessions#destroy'
	end

	# scope "(:locale)", locale: /en|fr/ do 
		root to: 'models#index' 
	# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
		resources :models, only: [:index, :show, :new, :create, :update, :edit]
	# end
	delete 'models/:id', to: 'models#destroy', as: 'destroy'
end
