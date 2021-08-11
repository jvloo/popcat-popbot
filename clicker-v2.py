from selenium import webdriver

driver = webdriver.Edge("lib\edgedriver_win32\msedgedriver.exe")
driver.get("https://popcat.click/")
driver.execute_script('var event=new KeyboardEvent("keydown",{key:"g",ctrlKey:!0});setInterval(function(){for(i=0;i<100;i++)document.dispatchEvent(event)},0);');
