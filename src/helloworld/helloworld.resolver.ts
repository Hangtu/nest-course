import { Float, Query, Resolver, Int, Args, ResolveField } from '@nestjs/graphql';

@Resolver()
export class HelloworldResolver {
    
   
    @Query(() => String)
    helloWorld(): string {
        return 'Hello World';
    }

    @Query(()=> Float, {name: 'randomNumber'})
    getRandomNumber(): number {
        return Math.random() * 100;
    }

    @Query(()=> Int, {name: 'randomFromZeroTo', description: 'This is a description'})
    getNumber(@Args('to', {type:()=> Int , nullable: true}) to: number = 5): number {
        return Math.floor(Math.random() * to);
    }
    
}
