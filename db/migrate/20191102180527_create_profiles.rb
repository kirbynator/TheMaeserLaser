class CreateProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles do |t|
      t.string :imageone
      t.string :imagetwo
      t.string :name
      t.string :bio
      t.string :title
      t.string :blurb

      t.timestamps
    end
  end
end
