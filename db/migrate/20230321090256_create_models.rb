class CreateModels < ActiveRecord::Migration[7.0]
  def change
    create_table :models do |t|
      t.string :first_name
      t.string :last_name
      t.string :description
      t.integer :age
      t.string :gender
      t.string :role
      t.string :category
      t.string :based_in
      t.string :height
      t.string :chest
      t.string :waist
      t.string :hips
      t.string :foot
      t.string :hair
      t.string :eye
      t.string :email
      t.string :instagram

      t.timestamps
    end
  end
end
