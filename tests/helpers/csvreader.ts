import { homedir } from 'os';
import path from 'path';
import fs from 'fs'

export default class CSVReader {

    static async getMostRecentFile(dir) {
        let dir1 = path.resolve(dir);
        try {
            let files = await fs.promises.readdir(dir1);
    
            let sorted = files.map(function(v) {
                let filepath = path.resolve(dir1, v);
                return {
                    name: v,
                    time: fs.statSync(filepath).mtime.getTime()
                }; 
            })
            .sort(function(a, b) { return b.time - a.time; })
            .map(function(v) { return v.name; });
    
            if (sorted.length > 0) {
                return sorted[0];  // Return the most recent file
            } else {
                throw new Error('No files found in this dir...');
            }
        } catch (err) {
            throw new Error('Error reading directory: ' + err.message);
        }
    }
    
    static async readMostRecentFile(folder) {
        let loc = `${homedir()}/${folder}`;
        try {
            let recentFile = await this.getMostRecentFile(loc);
            const csvFilePath = await path.resolve(loc, recentFile);
            const fileContent = await fs.readFileSync(csvFilePath, {encoding: "utf-8",});
            return fileContent;
        } catch (err) {
            console.error(err.message);
            return null;
        }
    }

}
