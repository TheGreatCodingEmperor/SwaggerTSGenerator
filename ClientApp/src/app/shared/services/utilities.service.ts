import { Injectable } from "@angular/core";
import { MessageService } from "primeng/api";
import { Observable, catchError, tap, throwError } from "rxjs";

@Injectable({ providedIn: 'root' })
export class UtilitiesService {
    constructor(
        private message: MessageService
    ) {
    }
    showSuccess(message: string, detail?: string) {
        this.message.add({ severity: 'success', summary: message, detail: detail });
    }
    showError(message: string, detail?: string) {
        this.message.add({ severity: 'error', summary: message, detail: detail });
    }
    showInfo(message: string, detail?: string) {
        this.message.add({ severity: 'info', summary: message, detail: detail });
    }
    showWarn(message: string, detail?: string) {
        this.message.add({ severity: 'warn', summary: message, detail: detail });
    }

    basicMessage() {
        return (source: Observable<any>) => {
            return source.pipe(
                tap(res => {
                    // 这里是您的逻辑
                    this.showSuccess("Success!");
                }),
                catchError(error => {
                    // 这里是处理错误的逻辑
                    this.showError("Failed!", error.error);
                    return throwError(() => error);
                })
            );
        }
    }
}