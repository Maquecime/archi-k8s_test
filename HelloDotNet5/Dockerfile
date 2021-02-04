# https://hub.docker.com/_/microsoft-dotnet
FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build

ENV APP_HOME /opt/app
RUN mkdir $APP_HOME
WORKDIR $APP_HOME
# copy csproj and restore as distinct layers

COPY HelloDotNet5/*.csproj $APP_HOME/HelloDotNet5/
RUN cd $APP_HOME/HelloDotNet5 && dotnet restore

# copy everything else and build app
COPY HelloDotNet5 $APP_HOME/HelloDotNet5/
RUN cd $APP_HOME/HelloDotNet5 && dotnet build

FROM build as publish
WORKDIR $APP_HOME/HelloDotNet5
RUN dotnet publish -c Release -o out

# final stage/image
FROM mcr.microsoft.com/dotnet/aspnet:5.0 as final
WORKDIR /app
ENV ASPNETCORE_URL=http://+:5030
COPY --from=publish /opt/app/HelloDotNet5/out ./

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

CMD /wait && dotnet HelloDotNet5.dll
