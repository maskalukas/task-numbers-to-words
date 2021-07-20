**Docker**
1) git clone https://github.com/maskalukas/task-numbers-to-words.git
2) docker-compose -f docker-compose.yml up --build
-------------------------------------------------------------------------
client: localhost:3000
server: localhost:8000
        
api GET:    

    - Transfer of number without filter.
        GET: /v1/call/:numbers/nofilter

    - Transfer of number with filter.
        GET: /v1/call/:numbers/withfilter

<div style="font-size: 8px">
 <p>backend: nodejs</p>
<p>frontend-pc: chrome</p>
<p>frontend-phone: android</p>
</div>



