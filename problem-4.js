function password(userInfo) {
const {name, birthYear, siteName }=userInfo;
    if (!name || !birthYear || !siteName || isNaN(birthYear) || birthYear.toString().length !== 4) {
      return 'invalid';
    }

        const siteName1 = siteName.charAt(0).toUpperCase() + siteName.slice(1);
        const generatedPass = siteName1+'#'+name+'@'+birthYear;{
            return generatedPass;
        }
      }
   const userObject = { name: "habib", birthYear: 2004, siteName: "sunamitcenter" };
   const generatedPass = password(userObject);
   
   console.log(generatedPass);    
  