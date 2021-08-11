from selenium import webdriver

from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By

driver = webdriver.Edge("lib\edgedriver_win32\msedgedriver.exe")

driver.get("https://popcat.click/")
driver.execute_script('var event=new KeyboardEvent("keydown",{key:"g",ctrlKey:!0});setInterval(function(){for(i=0;i<1000;i++)document.dispatchEvent(event)},0);');
