# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Model.destroy_all
User.destroy_all

1.times do

  first_name = "test"
  last_name = "test"
  description = "jeune influenceur de 20 ans. depuis de nombreuses années désormais, sa manière d’évoquer ses doutes, ses ambitions avec toujours beaucoup d’humour mais aussi une véritable poésie lui a permis de réunir une communauté fidèle et engagée."
  age = rand(20..27)
  gender = ["male", "female"].sample
  type = ["Model", "Actor", "Rapper"].sample
  category = ["new faces", "talents"].sample
  based_in = "test"
  height = rand(169..201).to_s
  chest = rand(80..95).to_s
  waist = rand(57..80).to_s
  hips = rand(80..100).to_s
  foot = rand(37..43).to_s
  hair = ["Brun", "Blond", "Roux"].sample
  eye = ["Bleus", "Verts", "Marrons"].sample
  email = "test"
  instagram = "test"

  model = Model.create!(first_name: first_name, 
  						last_name: last_name, 
  						description: description,
  						age: age,
  						gender: gender,
  						role: type,
  						category: category, 
  						based_in: based_in,
  						height: height,
  						chest: chest,
  						waist: waist,
  						hips: hips,
  						foot: foot,
  						hair: hair,
  						eye: eye,
  						email: email,
  						instagram: instagram
  						)
end

User.create!(email: "website@skymgmt.com", password: "skymgmtadmin")


