**Docker**
1) git clone https://github.com/maskalukas/task-numbers-to-words.git
2) docker-compose -f docker-compose.yml up --build
-------------------------------------------------------------------------
client: localhost:3000
server: localhost:8000

api GET:    
        
    - Převod čísla bez filtru
        GET: /v1/call/:numbers/nofilter
    - Převod čísla s filtrem
        GET: /v1/call/:numbers/withfilter



