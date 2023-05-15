export interface Env 
{
    env:string; //"prod" or "dev"
}

export default 
{
	async fetch(request:Request, env:Env, context:ExecutionContext):Promise<Response> 
    {
        let response = new Response('{}');
        response.headers.set('Access-Control-Allow-Headers', 'Content-Type, X-Json');    
        response.headers.set('Access-Control-Allow-Origin', '*');
        response.headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
        response.headers.set('Access-Control-Max-Age', '86400');
        
        return response;        
    }
};