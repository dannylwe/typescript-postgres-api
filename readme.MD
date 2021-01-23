# How to setup Postgres on Docker

$ docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres
The default postgres user and database are created in the entrypoint with initdb.

The postgres database is a default database meant for use by users, utilities and third party applications.

[link](postgresql.org/docs)