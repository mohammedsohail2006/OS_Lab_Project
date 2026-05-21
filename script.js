let avgResults = { fcfs:0, sjf:0, rr:0 };

function generateInputs() {
    let n = document.getElementById("n").value;
    let container = document.getElementById("inputs");

    container.innerHTML = "";

    for (let i = 0; i < n; i++) {
        container.innerHTML += `
            <div>
                <h4>P${i+1}</h4>
                AT: <input type="number" id="at${i}">
                BT: <input type="number" id="bt${i}">
            </div><br>
        `;
    }
}

function calculate(){
    let n = parseInt(document.getElementById("n").value);

    let at=[], bt=[];
    for(let i=0;i<n;i++){
        at.push(parseInt(document.getElementById("at"+i).value));
        bt.push(parseInt(document.getElementById("bt"+i).value));
    }

    let algo = document.getElementById("algo").value;
    let output="";
    let gantt=[];
    let time=0;

    // ================= FCFS =================
    if(algo=="fcfs"){
        let wt=[], tat=[], ct=[];

        ct[0]=Math.max(0,at[0])+bt[0];
        gantt.push({p:0,start:0,end:ct[0]});

        for(let i=1;i<n;i++){
            let start=Math.max(ct[i-1],at[i]);
            ct[i]=start+bt[i];
            gantt.push({p:i,start:start,end:ct[i]});
        }

        for(let i=0;i<n;i++){
            tat[i]=ct[i]-at[i];
            wt[i]=tat[i]-bt[i];
        }

        avgResults.fcfs = wt.reduce((a,b)=>a+b,0)/n;

        output+="FCFS\n";
        for(let i=0;i<n;i++){
            output+=`P${i+1} WT=${wt[i]} TAT=${tat[i]}\n`;
        }
    }

    // ================= SJF =================
    else if(algo=="sjf"){
        let p=[];
        for(let i=0;i<n;i++){
            p.push({id:i,bt:bt[i]});
        }

        p.sort((a,b)=>a.bt-b.bt);

        let wt=Array(n).fill(0);
        let tat=Array(n).fill(0);

        time=0;

        for(let i=0;i<n;i++){
            let id=p[i].id;

            wt[id]=time;
            time+=bt[id];
            tat[id]=time;

            gantt.push({p:id,start:time-bt[id],end:time});
        }

        avgResults.sjf = wt.reduce((a,b)=>a+b,0)/n;

        output+="SJF\n";
        for(let i=0;i<n;i++){
            output+=`P${i+1} WT=${wt[i]} TAT=${tat[i]}\n`;
        }
    }

    // ================= ROUND ROBIN =================
    else if(algo=="rr"){
        let tq = parseInt(document.getElementById("tq").value);

        let rem=[...bt];
        let wt=Array(n).fill(0);
        let tat=Array(n).fill(0);

        time=0;

        while(true){
            let done=true;

            for(let i=0;i<n;i++){
                if(rem[i]>0 && at[i]<=time){

                    done=false;

                    let start=time;

                    if(rem[i]>tq){
                        time+=tq;
                        rem[i]-=tq;
                    }else{
                        time+=rem[i];
                        tat[i]=time-at[i];
                        wt[i]=tat[i]-bt[i];
                        rem[i]=0;
                    }

                    gantt.push({p:i,start:start,end:time});
                }
            }

            if(done){
                let next=Infinity;
                for(let i=0;i<n;i++){
                    if(rem[i]>0){
                        next=Math.min(next,at[i]);
                    }
                }

                if(next===Infinity) break;
                time=next;
            }
        }

        avgResults.rr = wt.reduce((a,b)=>a+b,0)/n;

        output+="ROUND ROBIN\n";
        for(let i=0;i<n;i++){
            output+=`P${i+1} WT=${wt[i]} TAT=${tat[i]}\n`;
        }
    }

    document.getElementById("output").innerText = output;

    drawGantt(gantt);
    drawChart();
}

// ================= GANTT =================
function drawGantt(gantt){
    let div=document.getElementById("gantt");
    div.innerHTML="";

    gantt.forEach(g=>{
        let box=document.createElement("div");
        box.style.display="inline-block";
        box.style.border="1px solid black";
        box.style.padding="10px";
        box.style.margin="2px";
        box.innerHTML=`P${g.p+1}<br>${g.start}-${g.end}`;
        div.appendChild(box);
    });
}