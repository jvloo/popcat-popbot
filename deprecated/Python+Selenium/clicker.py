from selenium import webdriver

from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By

driver = webdriver.Edge("lib\edgedriver_win32\msedgedriver.exe")

def navigate(url):
    driver.get(url)

def click(target):
    WebDriverWait(driver, 30).until(EC.element_to_be_clickable((By.ID, target)))
    driver.find_element_by_id(target).click()

navigate("https://popcat.click/")

while True:
    click("app")
