describe('Pet Swagger', function(){

    it('PostPet', function(){
        cy.request({
            method : 'POST',
            url : 'https://petstore.swagger.io/pet/addPet',
            body : {
                "id": 120141,
                "category": {
                  "id": 0,
                  "name": "string"
                },
                "name": "doggo",
                "photoUrls": [
                  "string"
                ],
                "tags": [
                  {
                    "id": 0,
                    "name": "string"
                  }
                ],
                "status": "available"
            },
            headers : {
                'content-type' : 'application/json'
            }
        }).then(function(response){

            expect(response.body).have.property('json');
            expect(response.body.json).to.deep.equal({
                "id": 120141,
                "category": {
                  "id": 0,
                  "name": "string"
                },
                "name": "doggo",
                "photoUrls": [
                  "string"
                ],
                "tags": [
                  {
                    "id": 0,
                    "name": "string"
                  }
                ],
                "status": "available"
            })
        });
    });

    it('PutPet', function(){
        cy.request({
            method : 'PUT',
            url : 'https://petstore.swagger.io/pet/updatePet',
            body : {
                "id": 120141,
                "category": {
                  "id": 0,
                  "name": "string"
                },
                "name": "doggo",
                "photoUrls": [
                  "string"
                ],
                "tags": [
                  {
                    "id": 0,
                    "name": "string"
                  }
                ],
                "status": "pending"
            },
            headers : {
                'content-type' : 'application/json'
            }
        }).then(function(response){

            expect(response.body).have.property('json');
            expect(response.body.json).to.deep.equal({
                "id": 120141,
                "category": {
                  "id": 0,
                  "name": "string"
                },
                "name": "doggo",
                "photoUrls": [
                  "string"
                ],
                "tags": [
                  {
                    "id": 0,
                    "name": "string"
                  }
                ],
                "status": "pending"
            })
        });
    });

    it('FindPetByStatus', function(){
        cy.get('.status')
            .select('available')
            .should('have.value', 'available')

        cy.request({
            method : 'GET',
            url : 'https://petstore.swagger.io/pet/findPetsByStatus'
        }).then(function(response){

            expect(response.body).have.property('url', 'https://petstore.swagger.io/v2/pet/findByStatus?status='+ status );
        });
    });

    it('FindPetById', function(){
        cy.get('.petId')
            .type('120141').should('have.value', '120141');

        cy.request({
            method : 'GET',
            url : 'https://petstore.swagger.io/pet/getPetById'
        }).then(function(response){

            expect(response.body).have.property('url', 'https://petstore.swagger.io/v2/pet/'+ petId );
        });
    });


    it('OrderStore', function(){
        cy.request({
            method : 'POST',
            url : 'https://petstore.swagger.io/store/placeOrder',
            body : {
                "id": 0,
                "petId": 0,
                "quantity": 0,
                "shipDate": "2022-08-20T11:54:34.839Z",
                "status": "placed",
                "complete": true
            },
            headers : {
                'content-type' : 'application/json'
            }
        }).then(function(response){

            expect(response.body).have.property('json');
            expect(response.body.json).to.deep.equal({
                "id": 0,
                "petId": 0,
                "quantity": 0,
                "shipDate": "2022-08-20T11:22:33.444Z",
                "status": "placed",
                "complete": true
            })
        });
    });

    it('FindOrderId', function(){
        cy.get('.orderId')
            .type('3').should('have.value', '3');

        cy.request({
            method : 'GET',
            url : 'https://petstore.swagger.io/store/getOrderById'
        }).then(function(response){

            expect(response.body).have.property('url', 'https://petstore.swagger.io/v2/store/order/'+ orderId );
        });
    });

    it('getInventory', function(){
      cy.request({
          method : 'GET',
          url : 'https://petstore.swagger.io/store/getInventory'
      }).then(function(response){

          expect(response.body).have.property('url', 'https://petstore.swagger.io/v2/store/inventory' );
      });
    });
    
    it('createUser', function(){
      cy.request({
          method : 'POST',
          url : 'https://petstore.swagger.io/user/createUser',
          body : {
            "id": 3345,
            "username": "bobay",
            "firstName": "bob",
            "lastName": "ay",
            "email": "bob.ay@abc.com",
            "password": "verystrongpassword",
            "phone": "08123456789",
            "userStatus": 0
          },
          headers : {
              'content-type' : 'application/json'
          }
      }).then(function(response){

          expect(response.body).have.property('json');
          expect(response.body.json).to.deep.equal({
            "id": 3345,
            "username": "bobay",
            "firstName": "bob",
            "lastName": "ay",
            "email": "bob.ay@abc.com",
            "password": "verystrongpassword",
            "phone": "08123456789",
            "userStatus": 0
          })
      });
    });


    it('getUserByName', function(){
        cy.get('.username ')
            .type('string').should('have.value', 'string');

        cy.request({
            method : 'GET',
            url : 'https://petstore.swagger.io/user/getUserByName'
        }).then(function(response){

            expect(response.body).have.property('url', 'https://petstore.swagger.io/user/'+ username );
        });
    });


})