class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.string :title
      t.string :author
      t.string :photo
      t.text :desc

      t.timestamps
    end
  end
end
