// 1. super user in db TODO
// 2. create login page
// 3. add clinic (firstly parent clinic) (dropdown)
// 4. show ui based on role

// ?    Super Admin -> Admin(super-admin?) , Users, CLinics , Labs
// ?    Dentist Admin -> Dentist (Dentist-Admin) , Users , Clinics
// ?    Dentist User -> Dentist (Dentist-User) , Users , Clinics
// !    Technician Admin -> Technician (Technician-Admin) , Users , Clinics
// !    Technician User -> Technician (Technician-User) , Users , Clinics

// 5. add dentist to db (sup , dent admin)
// 6. dentist list if super admin
// 7. order list
// 8. list of clinics
// dentist admin -> update & see own & child c info
//     ** add child clinics
//   dentist user -> read only list of own & child
//   super admin -> all clinics in db (all) (visualise the active field in ui)
//     ** add parent/child clinic  (ui for add)
//   technician -> connected clinic to their labs (skip as of now)
//     ** add get connecting clinics api

// 9. list of labs
// dentist -> connected labs to their parent (read only)
//   admin ** own clinic obj can be updated , add & remove connected lab
//   user ** no perms
// super admin -> all
// technician admin -> update & see own lab info
// technician user -> not see info at all

// ! Clinic cannot have technicians AT ALL
// ! Labs cannot have dentists AT ALL

//? USERS
// dent user -> update own info
// dent admin -> update own & dentist users/admins of thier clinic
// tech user -> cannot see users option at all
// tech admin -> can see all users under his lab

// ? Labs
// tech user & admin ->cannot see labs option

// ? Clinics
// tech admin -> Clinics connected with their lab

// ! Super Admin
// Dentists -> Yes! (Read , update , add , all)
// Technicians -> Yes! (Read , update , add , all)
// Orders -> NO ACCESS AT ALL
// Labs -> Yes! (Read , Update , add , all)
// Clinics -> Yes! (Read , Update , add , all)

// ! Technician Admin
// Dentists -> NO ACCESS AT ALL
// Technicians as Users -> Yes! (Read , update , add , Under own Lab Only)
// Orders -> Orders from own lab only(read ,  add , )
// Labs -> NO ACCESS AT ALL
// Clinics -> Connected Clinics to own Lab(SKIP)

// ! Technician User
// Dentists -> NO ACCESS AT ALL
// Technicians ->  NO ACCESS AT ALL
// Orders -> Orders from own lab only( read ,  add , update)
// Labs -> NO ACCESS AT ALL
// Clinics -> Connected Clinics to own Lab(SKIP)

// ! Dentist Admin
// Dentists as Users -> Yes! (Read , update , add users , Under own  & child clinic only )
// Technicians -> NO ACCESS AT ALL
// Orders -> Orders from own & child clinics(read ,  add , update)
// Labs -> Connected Labs(skip)
// Clinics ->  Yes! (Read , Update , add , Child clinics & own clinic)

// ! Dentist User
// Dentists as Users -> Yes! (Read , Under own clinic only)
// Technicians ->NO ACCESS AT ALL
// Orders -> orders from own (if user is assigned as a dentist)
// Labs -> Connected Labs (Read only )
// Clinics -> Yes! (Read only , own & child)

// NOTE archieve option instead of delete (archieve by lab , clinic)(vice versa)
// XX SNACKBAR 
// alert bar on m ui