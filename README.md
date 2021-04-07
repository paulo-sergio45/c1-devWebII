####unidade de saude CRUDE
```
get
```
``` 
post 
body:{       
        "nome":"paulo",
        "descricao":"eu",
        "endereco":"rua dos bobos",
        "telefone":"123456487",
        "email":"paulo@enois.com",
        "latlong":"46546464"
}
```
```
get:id
```
```
put:id 
body:{
    "nome": "aki",
    "telefone": "3315664646555",
    "email": "paulo@enois.com",
    "latlong": "46546464"
}
```
```
del:id
```


####pessoas CRUDE
```
get
```
``` 
post 
body:{       
        "unisaude_id":"606b69c06a118f3238b036e7",
        "nome":"jairo",
        "cpf":"12346789333",
        "data_nasci":"06/04/1992",
        "telefone":"123456487",
        "grupo_priori":true,
        "endereco":"rua dos bobos",
        "email":"paulo@enois.com"
 
}
```
```
get:id
```
```
put:id 
body:{       

        "nome":"paulo",
        "cpf":"12346789333",
        "data_nasci":"06/04/1992",
        "telefone":"123456487",
        "grupo_priori":true,
        "endereco":"rua dos bobos",
        "email":"paulo@enois.com"
 
}
```
```
del:id
```

####agenda CRUDE
```
get
```
``` 
post 
body:{       
        "unisaude_id": "606b69c06a118f3238b036e7",
        "pessoa_id": "606d6efbe6f00f2d609b36d0",
        "data_hora": "2021-04-06",
        "necessidades": true,
        "observacoes": "talvez"
 
}
```
```
get:id
```
```
put:id 
body:{       

      "unisaude_id": "606b69c06a118f3238b036e7",
        "pessoa_id": "606d6efbe6f00f2d609b36d0",
        "data_hora": "2021-04-08",
        "necessidades": true,
        "observacoes": "sim"
 
}
```
```
del:id
```