import requests
from bs4 import BeautifulSoup
import csv
import time
from urllib.parse import urljoin

def get_level_and_title(text):
    """根据标题前的#号数量确定层级"""
    if not text.startswith('#'):
        return 0, text.strip()
    
    level = 0
    while text.startswith('#'):
        level += 1
        text = text[1:]
    return level, text.strip()

def crawl_website():
    url = "https://axutongxue.com/"
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
    
    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        soup = BeautifulSoup(response.text, 'html.parser')
        
        links = []
        # 获取所有链接和层级
        for a_tag in soup.find_all('a', href=True):
            title_text = a_tag.get_text().strip()
            href = a_tag['href']
            
            # 获取层级和清理后的标题
            level, clean_title = get_level_and_title(title_text)
            
            # 将相对URL转换为绝对URL
            full_url = urljoin(url, href)
            
            if clean_title and href:  # 只保存有标题和链接的项目
                links.append({
                    'level': level,
                    'title': clean_title,
                    'url': full_url
                })
        
        # 保存到CSV文件
        csv_file = 'd:\\Program Files (x86)\\Trae\\tools\\feishuduowebiaogeceshi\\website_links.csv'
        with open(csv_file, 'w', newline='', encoding='utf-8-sig') as file:
            writer = csv.DictWriter(file, fieldnames=['level', 'title', 'url'])
            writer.writeheader()
            writer.writerows(links)
            
        print(f"成功抓取 {len(links)} 个链接并保存到 website_links.csv")
        
    except requests.RequestException as e:
        print(f"抓取失败: {e}")
    except Exception as e:
        print(f"发生错误: {e}")

if __name__ == "__main__":
    crawl_website()