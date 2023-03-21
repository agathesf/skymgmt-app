class ModelsController < ApplicationController
	def index
		@models = Model.all
	end

	def show
	  @model = Model.find(params[:id])
	end


	def new
	  @model = Model.new
	end

	def create
	  @model = Model.new(model_params)
	  if @model.save
	    redirect_to model_path(@model)
	  else
	    render :new
	  end
	end

	def edit
	  @model = Model.find(params[:id])
	end

	def update
	  @model = Model.find(params[:id])
	  @model.update(model_params)
	  redirect_to model_path(@model)
	end

	def destroy
	  @model = Model.find(params[:id])
	  @model.destroy
	  redirect_to models_path
	end

	private

	def model_params
	  params.require(:model).permit(:first_name, :last_name, :description, :age, :gender, :role, :category, :based_in, :height, :chest, :waist, :hips, :foot, :hair, :eye, :email, :instagram, photos: [])
	end
end