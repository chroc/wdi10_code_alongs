class CreateCookies < ActiveRecord::Migration[5.0]
  def change
    create_table :cookies do |t|
      t.text :name
      t.text :description
      t.decimal :price
      t.boolean :tasty

      t.timestamps
    end
  end
end
