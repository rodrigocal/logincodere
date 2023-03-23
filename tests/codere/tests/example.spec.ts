import { test, expect } from '@playwright/test';

test('try login', async ({ page }) => {

  //https://m.apuestas.codere.es/
  await page.goto('https://m.apuestas.codere.es/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Codere/);

  // Comprobamos que estamos en la página correcta
  const title = await page.title();
  if (title !== 'Apuestas en Directo – Lo Mejor de España | Codere®') {
    console.error('No estamos en la página correcta');
    await page.close();
    return;
  }
    
  const button = await page.$('text=Acceder');
  console.log("Valor de Button: " + button);     
         
  if (button === null) {
    console.log("No se pudo hacer click en boton acceder.");        
  } else {
    await button.click();
  }
  
  const username = await page.$('input[name="username"]');
  if (username === null) {
    console.log("No se ha podido obtener el input username.");        
  } else {
    console.log("La variable no es nula y su valor es: " + username);
    await username.type('pepito');
  }

  const password = await page.$('input[name="password"]');
  if (password === null) {
    console.log("No se ha podido obtener el input password.");        
  } else {
    console.log("La variable no es nula y su valor es: " + password);
    await password.type('p3p1t0');
  }

  console.log("Hacemos click en Acceder");
  
  //await page.click('button[type="submit"]');

  const submit = await page.$('button[type="submit"]');
  if (submit) {
    await submit.click();
  }

  console.log("Final del test de login Codere");

  //const user = await page.getByRole("link", {name: 'Acceder'}).click ();  
  

});
