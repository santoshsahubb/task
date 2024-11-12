import { timeStamp } from 'console';
import { db } from '../config/db';
import { eq } from 'drizzle-orm';
import { activityLogs } from "../schemas";





export const logActivity = async (userId : string , action  : string , service : string ) =>{
   await db.insert(activityLogs).values({
        // timestamp: new Date(),
        user_id: userId,
        action,
        service,
    });
}

export const getActivityLogs = async (filters: Record<string, any>) => {
    try{
        // return   db.query.activityLogs.findMany({
        //     where: eq(activityLogs.user_id, filters.userId  ),
        // });
        const entries = await db.query.activityLogs.findMany({
            where: eq(activityLogs.user_id, filters.userId),
        });
        
        console.log(entries);
        return entries

    } catch (error) {
        console.error("Error fetching activity log: ", error);
        throw error;
    }

};