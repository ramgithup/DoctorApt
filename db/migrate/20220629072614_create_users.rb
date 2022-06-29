class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :first
      t.string :last
      t.string :image
      t.string :phone

      t.timestamps
    end
  end
end
